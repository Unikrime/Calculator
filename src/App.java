import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        System.out.println(
                "Добро пожаловать в примитивный калькулятор! \nЧтобы завершить работу напишите 'стоп'\nЧтобы продолжить - энтер");

        String stop = " ";
        double res = 0;
        while (!stop.equalsIgnoreCase("stop")) {
            System.out.print("Введите 2 числа \nпервое : ");
            double q = sc.nextDouble();
            System.out.print("второе : ");
            double w = sc.nextDouble();

            System.out.print(
                    "Выберите действие:\n1. Сложение \n2. Вычитание \n3. Умножение \n4. Деление\nваш выбор : ");
            int e = sc.nextInt();
            sc.nextLine();
            switch (e) {
                case 1 -> res = q + w;
                case 2 -> res = q - w;
                case 3 -> res = q * w;
                case 4 -> {
                    if (w == 0) {
                        System.out.print("На 0 делить нельзя\nпродолжить считать? ");
                    } else {
                        res = q / w;
                    }
                }
                default -> System.out.print("Несуществующий оператор!\nпродолжить считать? ");
            }
            if ((!(w == 0 && e == 4)) && (e == 1 || e == 2 || e == 3 || e == 4)) {
                System.out.print("Результат : " + res + "\nпродолжить считать? ");
            }
            stop = sc.nextLine();
        }
        System.out.println("Спасибо за работу!");

        sc.close();
    }

}
