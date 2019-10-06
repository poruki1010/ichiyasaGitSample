export function MyObj2(){
  return {
      red:255, blue:15, green:30,
      total:function(){
        return this.red + this.blue + this.green;
      }
  };
};
