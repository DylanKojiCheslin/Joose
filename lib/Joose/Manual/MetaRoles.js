/**

NAME
====

Joose.Manual.MetaRoles - Yet another special kind of Roles in Joose.


WHAT IS A META-ROLE?
====================

Meta-role is a usual role, applied to a meta-class instance. Because of that, meta-role is also a [trait][traits].

Like any other Role, meta-role modifies the class, adding some re-usable behavior to it. Most probably this behaviour will be related
to the constructing of the class being modified, for example it will provide additional builders for class.


APPLYING META-ROLE
==================

Meta roles can be added to class using the `metaRole` or `trait` builders:


        Class('Person', {
        
            trait : JooseX.Storable,
            
            has : {
                firstName : {},
                lastName  : {}
            }
        })

Here we declared a class `Person`, which metaclass instance (`Person.meta`) will have trait `JooseX.Storable` applied.

This trait probably provides the facilities to serialize the current state of the class and later restore it.

See [this][recipe] Cookbook recipe on how to create custom meta-role.


REMOVING META-ROLE
==================

For symmetry, its possible to remove the meta-role, using `removeMetaRole` builder:

        Person.meta.extend({
            removeMetaRole : JooseX.Storable
        })



AUTHOR
======

Nickolay Platonov [nickolay8@gmail.com](mailto:nickolay8@gmail.com)

Heavily based on the original content of Moose::Manual, by Dave Rolsky [autarch@urth.org](mailto:autarch@urth.org)


COPYRIGHT AND LICENSE
=====================

Copyright (c) 2008-2011, Malte Ubl, Nickolay Platonov

All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
* Neither the name of Malte Ubl nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission. 

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 


[traits]: Traits.html
[recipe]: ../Cookbook/MetaRole.html
*/
