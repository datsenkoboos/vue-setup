import { defineComponent } from 'vue';
import {
  mount,
  VueWrapper,
  type ComponentMountingOptions,
} from '@vue/test-utils';

type Options = ComponentMountingOptions<unknown>;
type Composable = (...args: unknown[]) => object;
export default function mountComposable(
  options: Options,
  composable: Composable,
  ...args: unknown[]
): VueWrapper;

export default function mountComposable(
  composable: Composable,
  ...args: unknown[]
): VueWrapper;

/**
 * Creates a Vue Wrapper for testing provided composable.
 * @param {Options | Composable} optionsOrComposable - Either the mounting options or the composable function.
 * @param {Composable | unknown[]} composableOrArgs - Either the composable function or the arguments for the composable.
 * @param {unknown[]} args - Additional arguments for the composable when options are provided.
 */
export default function mountComposable(
  optionsOrComposable: unknown,
  composableOrArgs: unknown,
  ...args: unknown[]
) {
  let options: Options = {};
  let composable: Composable;
  let composableArguments: unknown[] = args;

  if (typeof optionsOrComposable === 'function') {
    composable = optionsOrComposable as Composable;
    if (composableOrArgs) {
      composableArguments = [composableOrArgs, ...args];
    }
  } else if (
    typeof optionsOrComposable === 'object' &&
    typeof composableOrArgs === 'function'
  ) {
    composable = composableOrArgs as Composable;
    options = optionsOrComposable as Options;
  } else {
    throw new Error('mountInComposable: Invalid arguments.');
  }

  const TestComponent = defineComponent({
    setup() {
      return {
        ...composable(...composableArguments),
      };
    },
    template: '<div>TestComponent</div>',
  });

  return mount(TestComponent, options);
}
