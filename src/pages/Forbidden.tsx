import Button from '@components/Button';
import Icon from '@components/Icon';
import { Link } from 'react-router-dom';

const Forbidden: React.FC = () => {
  return (
    <div className="w-100 h-screen flex items-center justify-center">
      <div>
        <div className="text-white text-shadow-xl">
          <h1 className="font-bold text-5xl uppercase">SORRY! THIS PAGE IS FORBIDDEN</h1>
        </div>
        <div className="mt-5">
          <Link to={'/'}>
            <Button type="button" classes="bg-primary text-sm" title="Home">
              <Icon icon="homeIcon" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forbidden;
