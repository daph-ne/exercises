package sort;

import edu.princeton.cs.algs4.StdRandom;

public class Shuffling implements SortInterface {

    @Override
    public void sort(int[] input) {
        int n = input.length;
        for (int i = 0; i < n; i++) {
            int r = StdRandom.uniform(i + 1);
            int temp = input[i];
            input[i] = input[r];
            input[r] = temp;
        }
        for (int i = 0; i < n; i++) {
            System.out.print(input[i] + " ");
        }
        System.out.println();
    }
}
