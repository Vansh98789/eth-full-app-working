folder structure -->


my-dapp/
│
├── contracts/              # Smart contracts
│   ├── src/                # Solidity source files
│   │   ├── Counter.sol
│   │   └── Token.sol
│   ├── test/               # Foundry/Hardhat tests
│   │   └── Counter.t.sol
│   ├── script/             # Deployment scripts
│   │   └── Deploy.s.sol
│   ├── foundry.toml        # Foundry config (or hardhat.config.js if Hardhat)
│   └── lib/                # Dependencies (OpenZeppelin etc.)
│
├── backend/                # (Optional) Backend API/middleware
│   ├── src/                # Node.js/Express/Nest.js code
│   │   └── index.ts
│   ├── prisma/             # DB schema if using Postgres/Prisma
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/               # Next.js/React app
│   ├── app/                # Pages/components (if Next.js App Router)
│   │   └── page.tsx
│   ├── components/         # Reusable React components
│   ├── hooks/              # Custom wagmi/viem hooks
│   ├── public/             # Static assets (images, icons)
│   ├── package.json
│   └── next.config.js
│
├── .gitignore
├── README.md               # Project overview
└── package.json            # Optional monorepo root (if using yarn/npm workspaces)
