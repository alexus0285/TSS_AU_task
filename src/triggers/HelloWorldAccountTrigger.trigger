trigger HelloWorldAccountTrigger on Account (before insert) {
/// chaanges
	MyHelloWorld.addHelloWorld(Trigger.new);
}