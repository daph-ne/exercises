package sort;

public class SelectionSort implements SortInterface {

    @Override
    public void sort(int[] input) {
        int n = input.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = i + 1; j < n; j++) {
                if (input[j] < input[i]) {
                    int temp = input[j];
                    input[j] = input[i];
                    input[i] = temp;
                }
            }
        }
        for (int i = 0; i < n; i++) {
            System.out.print(input[i] + " ");
        }
        System.out.println();
    }

}