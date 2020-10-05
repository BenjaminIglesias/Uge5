/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import DTO.PersonDTO;
import DTO.PersonsDTO;
import exceptions.PersonNotFoundException;
import entities.*;
import java.util.List;

/**
 *
 * @author Benjamin
 */
public interface IPersonFacade {
    public PersonDTO addPerson(String fName, String lName, String phone) throws PersonNotFoundException;
    public PersonDTO deletePerson(long id) throws PersonNotFoundException;
    public PersonDTO getPerson(long id) throws PersonNotFoundException;
    public PersonsDTO getAllPersons() throws PersonNotFoundException;
    public PersonDTO editPerson(PersonDTO p) throws PersonNotFoundException;
     
}
