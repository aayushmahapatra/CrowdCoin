// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

// contract code will go here
contract CampaignFactory {
	address[] public deployedCampaigns;

	function createCampaign(uint minimum) public {
		Campaign newCampaign = new Campaign(minimum, msg.sender);
		deployedCampaigns.push(address(newCampaign));
	}

	function getDeployedCampaigns() public view returns (address[] memory) {
		return deployedCampaigns;
	}
}

contract Campaign {
	struct Request {
		string description;
		uint value;
		address payable recipient;
		bool complete;
		uint approvalCount;
		mapping(address => bool) approvals;
	}

	mapping(uint => Request) public requests;
	address public manager;
	uint public minimumContribution;
	mapping(address => bool) public approvers;
	uint private currentIndex = 0;
	uint public approversCount;
	uint public requestsCount;

	modifier restricted() {
		require(msg.sender == manager);
		_;
	}

	constructor (uint minimum, address creator) {
		manager = creator;
		minimumContribution = minimum;
	}

	function contribute() public payable {
		require(msg.value > minimumContribution);
		approvers[msg.sender] = true;
		approversCount++;
	}

	function createRequest(string memory description, uint value, address payable recipient) public restricted {
		Request storage newRequest = requests[currentIndex];
		newRequest.description = description;
		newRequest.value = value;
		newRequest.recipient = recipient;
		newRequest.complete = false;
		newRequest.approvalCount = 0;
		currentIndex++;
		requestsCount++;
	}

	function approveRequest(uint index) public {
		Request storage request = requests[index];
		require(approvers[msg.sender]);
		require(!request.approvals[msg.sender]);

		request.approvals[msg.sender] = true;
		request.approvalCount++;
	}

	function finalizeRequest(uint index) public payable restricted {
		Request storage request = requests[index];
		require(request.approvalCount > (approversCount/2));
		require(!request.complete);

		request.recipient.transfer(request.value);
		request.complete = true;
	}

	function getSummary() public view returns (uint, uint, uint, uint, address) {
		return (
			minimumContribution,
			address(this).balance,
			requestsCount,
			approversCount,
			manager
		);
	}

	function getRequestsCount() public view returns (uint) {
		return requestsCount;
	}
}