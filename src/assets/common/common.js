export default {
  install(Vue,options) {
    Vue.prototype.Random = (Min, Max) =>{
      {
        let Range = Max - Min;
        let Rand = Math.random();
        let num = Min + Math.round(Rand * Range);
        return num;
      }
    }
  }
};
