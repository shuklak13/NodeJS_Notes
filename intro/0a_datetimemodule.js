/* 
    module.exports makes a module's attributes externally accessible
        when the module is imported via require(module)
*/
module.exports.myDateTime = function () {
    return Date();
};
