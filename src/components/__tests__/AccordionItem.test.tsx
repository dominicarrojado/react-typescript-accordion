import { fireEvent, render, screen } from '@testing-library/react';
import faker from 'faker';
import * as hooks from '../../lib/hooks';
import AccordionItem from '../AccordionItem';

describe('<AccordionItem />', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('should render content', () => {
    const title = faker.lorem.sentence();
    const content = faker.lorem.sentences();

    render(
      <AccordionItem
        data={{ title, content }}
        isOpen={faker.datatype.boolean()}
        btnOnClick={jest.fn()}
      />
    );

    const titleEl = screen.queryByText(title);
    const contentEl = screen.queryByText(content);

    expect(titleEl).toBeInTheDocument();
    expect(contentEl).toBeInTheDocument();
  });

  it('should not display content if isOpen is false', () => {
    const contentScrollHeight = faker.datatype.number({ min: 1 });

    jest
      .spyOn(hooks, 'getRefValue')
      .mockReturnValue({ scrollHeight: contentScrollHeight });

    const title = faker.lorem.sentence();
    const content = faker.lorem.sentences();

    render(
      <AccordionItem
        data={{ title, content }}
        isOpen={false}
        btnOnClick={jest.fn()}
      />
    );

    const titleEl = screen.queryByText(title);
    const listEl = titleEl?.closest('li');
    const contentEl = screen.queryByText(content);
    const contentContainerEl = contentEl?.parentElement;

    expect(listEl).not.toHaveClass('active');
    expect(contentContainerEl).toHaveStyle({ height: '0px' });
  });

  it('should display content if isOpen is true', () => {
    const contentScrollHeight = faker.datatype.number({ min: 1 });

    jest
      .spyOn(hooks, 'getRefValue')
      .mockReturnValue({ scrollHeight: contentScrollHeight });

    const title = faker.lorem.sentence();
    const content = faker.lorem.sentences();

    render(
      <AccordionItem
        data={{ title, content }}
        isOpen={true}
        btnOnClick={jest.fn()}
      />
    );

    const titleEl = screen.queryByText(title);
    const listEl = titleEl?.closest('li');
    const contentEl = screen.queryByText(content);
    const contentContainerEl = contentEl?.parentElement;

    expect(listEl).toHaveClass('active');
    expect(contentContainerEl).toHaveStyle({
      height: `${contentScrollHeight}px`,
    });
  });

  it('should call btnOnClick on title click', () => {
    const btnOnClickMock = jest.fn();

    const title = faker.lorem.sentence();
    const content = faker.lorem.sentences();

    render(
      <AccordionItem
        data={{ title, content }}
        isOpen={faker.datatype.boolean()}
        btnOnClick={btnOnClickMock}
      />
    );

    const titleEl = screen.queryByText(title) as HTMLButtonElement;

    fireEvent.click(titleEl);

    expect(btnOnClickMock).toBeCalledTimes(1);
  });
});
