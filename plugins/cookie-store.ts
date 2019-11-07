const plugin = ({ store }) => {
  const getter = (state) => {
    console.log('State', state);
    return state;
  };

  const setter = (val) => {
    console.log('Set', val);
  };

  store.watch(getter, setter);
};

export default plugin;
