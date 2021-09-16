public class MinMaxPair{
      int min, max;
}
public MinMaxPair find(float a[]){
  MinMaxPair res = new MinMaxPair();
  res.min = res.max = 0;

  for(int i = 1; i < a.length; i++){
      if(a[i] > a[res.max])
          res.max=1;
      if(a[i] < a[res.min])
          res.min =1;
  }
  return res;
}
