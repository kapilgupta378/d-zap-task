"use client";
import Button from "@/design-systems/Atoms/Button";
import Typography from "@/design-systems/Atoms/Typography";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

const Header: React.FC = () => {
  const { address, isConnected } = useAccount();
  const { open } = useWeb3Modal();
  const handleConnect = () => {
    open();
  };
  return (
    <header className="py-8">
      <div className="container px-16">
        <div className="flex items-center justify-between">
          <Typography className="text-center text-white" size="h4">
            D-Zap
          </Typography>
          <Button
            style={{
              backgroundImage:
                "linear-gradient(92deg, #D300B2 -4.3%, #3200DE 92.16%)",
            }}
            className="border-0  text-white h-fit w-[12%]"
            onClick={handleConnect}
          >
            {isConnected ? "Disconnect" : " Connect Wallet"}
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Header;
