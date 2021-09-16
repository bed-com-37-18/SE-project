public class Asymptotic{
  public static void main(String [] args){
      int n = 16, i = 0, count = 0;
        while(i++ < n){
            int j =1;

          while(j < n){
            count ++;
             j = j * 2;
          }
        }
  }
  System.out.println(count);
}
