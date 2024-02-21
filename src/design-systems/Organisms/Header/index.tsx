import Typography from "@/design-systems/Atoms/Typography";

const Header: React.FC = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <Typography className="text-center" size="h4">
            Currency Converter
          </Typography>
        </div>
      </div>
    </header>
  );
};
export default Header;
