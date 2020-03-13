public class HelloWorldController {
	@AuraEnabled
	public static String getHelloWorld(){
		return 'Hello World' ;
	}
}