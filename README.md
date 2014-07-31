VVX-Contact-App
===============
#v.2beta
Generates XML contact data for the Polycom VVX series phones.  

This was created to remove some of the monotony out of using XML Notepad 2007. (Recommended by the documentation to use)
No multiple select, will not edit file if there is a syntax error, and a bunch of erroneous behavior can be caused by shortcuts.

##Instructions

Enter in the required fields to generate a realtime generation of the contacts. 

Extension: Should be the extension of the contact the key would be entered for. *2001, 200, 20, etc*
Phone Label Id: Is simply the name of that contact.  *Office, John, John Smith, etc*
Context Group: Is the group in which the contacts are located.  

	[2001]
	type=friend
	host=dynamic
	defaultip=192.168.1.254
	dtmfmode=rfc2833
	defaultuser=2001
	secret=1x8dbyy
	context=hood <--
	...

	
Hopefully, more will be added soon.  Any ideas are open to suggestions :)
*Created using Angular.js and the Twitter Bootstrap Frameworks*
