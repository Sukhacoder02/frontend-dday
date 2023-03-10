// react component
import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
interface NumberOfEntriesProps {
  length: number;
}
const NumberOfEntries: React.FC<NumberOfEntriesProps> = (props: NumberOfEntriesProps): JSX.Element => {
  const [numberOfEntries, setNumberOfEntries] = React.useState(0);
  React.useEffect(() => {
    setNumberOfEntries(props.length);
  }, [props.length]);
  const navigate = useNavigate();
  return <p className="text-3xl font-bold">{props.length} Entries Found</p>;
};

export default NumberOfEntries;
