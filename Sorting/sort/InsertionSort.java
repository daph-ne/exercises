package sort;

public class InsertionSort implements SortInterface{

    @Override
    public void sort(int[] input) {
        int n = input.length;
        for (int j = 1; j < n; j++) {
            int i = j - 1;
            while (input[j] < input[i]) {
                int temp = input[j];
                input[j] = input[i];
                input[i] = temp;
                i--;
            }
        }
        for (int i = 0; i < n; i++) {
            System.out.print(input[i] + " ");
        }
        System.out.println();
    }

}
