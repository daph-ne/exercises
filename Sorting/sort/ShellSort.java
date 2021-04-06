package sort;

import static java.lang.Math.floor;

public class ShellSort implements SortInterface {
    @Override
    public void sort(int[] input) {
        int n = input.length;
        for (int gap = n/2; gap > 0; gap = gap/2) {
            for (int i = gap; i < n; i++) {
                for (int j = i; j >= gap && input[j - gap] > input[i]; j = j - gap) {
                    int temp = input[i];
                    input[i] = input[j - gap];
                    input[j - gap] = temp;
                }
            }
        }
        for (int i = 0; i < n; i++) {
            System.out.print(input[i] + " ");
        }
        System.out.println();
    }
}
