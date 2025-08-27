// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Counter {
    uint256 private _count;   
    address public owner;     

    event Incremented(address indexed by, uint256 newValue);
    event Decremented(address indexed by, uint256 newValue);

    error NotOwner();

    constructor(uint256 initial) {
        owner = msg.sender; 
        _count = initial;    
    }

    function get() external view returns (uint256) {
        return _count;
    }

    function inc() external {
        _count += 1;
        emit Incremented(msg.sender, _count);
    }

    function dec() external {
        require(_count > 0, "Underflow");
        _count -= 1;
        emit Decremented(msg.sender, _count);
    }

    function set(uint256 newValue) external {
        if (msg.sender != owner) revert NotOwner();
        _count = newValue;
        emit Incremented(msg.sender, _count);
    }
}
