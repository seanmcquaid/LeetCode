import java.util.Arrays;

public class ShuffleArray {
    private static int[] nums = {2,5,1,3,4,7};

    public static void main(String[] args){
        System.out.println(Arrays.toString(shuffle(nums, 3)));
    }

    public static int[] shuffle(int[] nums, int n) {
        int[] xArray = new int[n];
        int[] yArray = new int[n];
        int[] array = new int[2 * n];

        for(int i = 0; i < n; i++){
            xArray[i] = nums[i];
        }

        for(int i = n; i < nums.length; i++){
            yArray[i - n] = nums[i];
        }

        for(int i = 0; i < array.length; i+= 2){
            array[i] = xArray[i / 2];
            array[i + 1] = yArray[i / 2];
        }

        return array;
    }
}