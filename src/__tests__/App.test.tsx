import { render } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
  it('should render without errors', () => {
    const { container } = render(<App />);

    expect(container).toBeInTheDocument();
  });
});
