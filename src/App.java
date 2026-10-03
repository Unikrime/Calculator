import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);

        System.out.println("Введите 2 числа");
        double q = sc.nextDouble();
        double w = sc.nextDouble();

        System.out.println("Выберите действие:\n1. Сложение \n2. Вычитание \n3. Умножение \n4. Деление");
        int e = sc.nextInt();
        switch (e) {
            case 1 -> System.out.println("Результат: " + q + w);
            case 2 -> System.out.println("Результат: " + (q - w));
            case 3 -> System.out.println("Результат: " + q * w);
            case 4 -> System.out.println("Результат: " + q / w);
        }

        sc.close();
    }

}
