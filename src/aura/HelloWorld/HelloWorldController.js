({
    onInit: function (component, event, helper) {
        var action = component.get("c.getHelloWorld");
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCSESS"){
                var result = response.getReturnValue();
                component.set( 'v.greeting', result);
            }
        });
        $A.enqueueAction(action);
    }
})