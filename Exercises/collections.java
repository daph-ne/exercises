import java.util.LinkedList;

public class collections{
    public static void main(String[] args) {
        LinkedList<String> fruits = new LinkedList<String>();
        //Ading elements to list
        System.out.println("Add elements to linkedList : name.add()");
        fruits.add("Fruits");
        fruits.add("Apple");
        fruits.add("Cherry");
        fruits.add("Dates");
        fruits.add("Egg");
        fruits.add("Rice");
        System.out.println(fruits);
        System.out.println();

        //removing by string
        System.out.println("Remove element from linkedList by string : name.remove()");
        fruits.remove("Egg");
        System.out.println(fruits);
        System.out.println("Removed egg");
        System.out.println();

        //removing by index
        System.out.println("Remove element from linkedList by index : name.remove(idx)");
        fruits.remove(3);
        System.out.println(fruits);
        System.out.println();

        //remove first element
        System.out.println("Remove first element from linkedList : name.removeFirst()");
        fruits.removeFirst();
        System.out.println(fruits);
        System.out.println();

        //remove last element
        System.out.println("Remove last element from linkedList : name.removeLast()");
        fruits.removeLast();
        System.out.println(fruits);
        System.out.println();
    }
}