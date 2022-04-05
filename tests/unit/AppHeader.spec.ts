import { shallowMount } from '@vue/test-utils';
import AppHeader from '@/components/AppHeader/AppHeader.vue';
import AppLogo from '@/components/AppLogo.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const menuItems: unknown = [{ name: '' }];

    const wrapper = shallowMount(AppHeader, {
      computed: {
        menuItems() {
          return menuItems;
        },
      },
    });
    expect(wrapper.findComponent(AppLogo)).toBeTruthy();
  });
});
