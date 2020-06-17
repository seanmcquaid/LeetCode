public class ReverseInteger {
    public static void main(String[] args){
        System.out.println(reverse(123));
    }

    public static int reverse (int x){
        int reversedNum = 0;
        while(x != 0){
            int digit = x % 10;
            reversedNum = reversedNum * 10 + digit;
            x /= 10;
        }
        return reversedNum;
    }
}