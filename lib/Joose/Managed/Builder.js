Joose.Managed.Builder = new Joose.Proto.Meta('Joose.Managed.Builder', null, null, {

    //points to class
    target : null,
    
    initialize : function(props) {
        this.target = props.target;
    },
    
    
    buildStart : function(targetMeta, props){
        targetMeta.deCompose();
    },
    
    
    extend : function(props) {
        this.buildStart(this.target.meta, props);
        
        Joose.O.eachSafe(props, function(value, name) {
            var handler = this[name];
            
            if (!handler) throw "Unknow builder [" + name + "] was used during extending of [" + this.target + "]";
            
            handler.call(this, this.target.meta, value);
        }, this);
        
        this.buildComplete(this.target.meta, props);
    },
    

    buildComplete : function(targetMeta, props){
        targetMeta.compose();
    },
    
    
    methods : function(targetMeta, info) {
        Joose.O.eachSafe(info, function(value, name) {
            targetMeta.addMethod(name, value);
        }, this);
    },
    

    removeMethods : function(targetMeta, info) {
        Joose.A.each(info, function(name) {
            targetMeta.removeMethod(name);
        }, this);
    },
    
    
    have : function(targetMeta, info) {
        Joose.O.eachSafe(info, function(value, name) {
            targetMeta.addAttribute(name, value);
        }, this);
    },
    
    
    removeAttributes : function(targetMeta, info) {
        Joose.A.each(info, function(name) {
            targetMeta.removeAttribute(name);
        }, this);
    }
    
}).c;