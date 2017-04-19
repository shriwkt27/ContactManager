var module = angular.module('app', []);


module.controller('ContactController', function ($scope, ContactService) {
 
    $scope.contacts = ContactService.list();
 
    $scope.addContact = function () {
        ContactService.add($scope.contact);
        $scope.contact = {};
    }
 
    $scope.delete = function (id) {
 
        ContactService.delete(id);
        if ($scope.contact.id == id) 
            $scope.contact = {};
    }
 
    $scope.edit = function (id) {
        $scope.contact = angular.copy(ContactService.get(id));
    }
})
 
module.service('ContactService', function () {
    // unid is the unique id for contact
    var unid = 1;
     
    //contacts is used to store the array for contacts
    var contacts = [{
        id: 0,
        'firstname': 'Adam',
        'lastname': 'Wedi',
        'email': 'adamwedi2709@gmail.com',
        'phone': '418-569-7580',
        'status': 'Active'},
    { id: 1, 
        'firstname': 'John',
        'lastname': 'Mac',
        'email': 'johnmac@gmail.com',
        'phone': '558-769-6570',
        'status': 'InActive'
    }];
     
   // add is used to add new contact to the existing list or edit existing contacts
    this.add = function (contact) {
        if (contact.id == null) {
            contact.id = unid++;
            contacts.push(contact);
        } else {
            for (x in contacts) {
                if (contacts[x].id == contact.id) {
                    contacts[x] = contact;
                }
            }
        }
 
    }
 
   // get is used to return the particular contacts if its id is present
    this.get = function (id) {
        for (x in contacts) {
            if (contacts[x].id == id) {
                return contacts[x];
            }
        }
 
    }
     
    //delete is used to delete existing contacts from the list
    this.delete = function (id) {
        for (x in contacts) {
            if (contacts[x].id == id) {
                contacts.splice(x, 1);
            }
        }
    }
 
    //list is used to return existing contacts of the list
    this.list = function () {
        return contacts;
    }
});
