import {
  render,
  RenderComponentOptions,
  screen,
} from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { HelloComponent } from './hello.component';
import { HelloModule } from './hello.module';

describe('HelloComponent', () => {
  it('should initially render "Hello world" heading', async () => {
    await renderComponent();

    const heading = getHeading(/hello\s+world/i);
    expect(heading).toBeTruthy();
  });

  it('should initially have an input with "Greeting Target" label', async () => {
    await renderComponent();

    const input = getInput();
    expect(input).toBeTruthy();
    expect(input.value).toBe('world');
  });

  it('should render "Hello Angular" when "Angular" is typed in the input', async () => {
    await renderComponent();

    const input = getInput();
    input.setSelectionRange(0, 99);
    userEvent.type(input, '{backspace}Angular');

    const heading = getHeading(/hello\s+angular/i);
    expect(heading).toBeTruthy();
  });
});

async function renderComponent(
  options?: RenderComponentOptions<HelloComponent>
) {
  return render(HelloComponent, {
    excludeComponentDeclaration: true,
    imports: [HelloModule],
    ...options,
  });
}

function getHeading(name: string | RegExp) {
  return screen.getByRole('heading', { name, level: 1 });
}

function getInput() {
  return screen.getByLabelText('Greeting Target') as HTMLInputElement;
}
