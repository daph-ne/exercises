package sort;


public class Sort {
    public static void main(String args[]) {
       int[] input = new int[]{2, 8, 9, 6, 4, 0, 7, 1, 8};
       SelectionSort ss = new SelectionSort();
       ss.sort(input);
   }
}
