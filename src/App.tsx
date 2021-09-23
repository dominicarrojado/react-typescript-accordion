import './App.css';
import Accordion from './components/Accordion';

function App() {
  const accordionItems = [
    {
      title: 'Accordion Item #1',
      content: (
        <div>
          <strong>This is the first item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Milk</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Accordion Item #2',
      content: (
        <div>
          <strong>This is the second item's accordion body.</strong> It is
          hidden by default, but shown when title is clicked. It will also be
          hidden if the title is clicked again or when another item is clicked.
          You can pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Milk</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Accordion Item #3',
      content: (
        <div>
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Milk</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="container">
      <Accordion items={accordionItems} />
    </div>
  );
}

export default App;
