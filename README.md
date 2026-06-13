# hello_hardhat

1. npm install -D @openzeppelin/contracts
2. npx hardhat compile
3. npx hardhat test
4. npx hardhat ignition deploy ignition/modules/Counter.ts --network localhost
5. npx hardhat ignition deploy ignition/modules/Counter.ts --network sepolia
6. npx hardhat verify --network sepolia 0x8deFfC525524ed4A7E53b19a6576bA78e5938870

https://sepolia.etherscan.io/address/0x8deFfC525524ed4A7E53b19a6576bA78e5938870

1. npx hardhat verify --network sepolia 0x合约地址
2. npx hardhat verify --network sepolia 0x合约地址 "参数1" "参数2"