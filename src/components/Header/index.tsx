import * as React from 'react';
import './Header.css';
interface HeaderProps {
  title: string;
}
const Header: React.FC<HeaderProps> = (props: HeaderProps): JSX.Element => {
  return (
    <header>
      <div className="header-title">
        <h2 className="font-bold text-xl">{props.title}</h2>
      </div>
    </header>
  );
};
export default Header;
