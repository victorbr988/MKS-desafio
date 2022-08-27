import Panel from "../styles/Skeleton/panel"
import Skeleton from "../styles/Skeleton";
import { Container } from '../styles/Skeleton/Container'

export const LoadingItem: React.FC = () => {
  return (
    <Container>
      <Panel className="no-shadow">
        <Skeleton className="bg-skeleton" />
        <span>
          <Skeleton className="image-item-skeleton"/>
          <Skeleton className="row-skeleton"/>
          <Skeleton className="row-skeleton"/>
        </span>
      </Panel>
    </Container>
  );
};
