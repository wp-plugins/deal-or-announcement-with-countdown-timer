/**
 *     deal or announcement with countdown timer
 *     Copyright (C) 2011 - 2013 www.gopiplus.com
 *     http://www.gopiplus.com/work/2010/07/18/deal-or-announcement-with-countdown-timer/
 * 
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 * 
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 * 
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
 
function gCountdownform()
{
	if(document.form1.gCount.value=="")
	{
		alert("Please enter the text.")
		document.form1.gCount.focus();
		return false;
	}
	if(document.form1.gCountmonth.value=="")
	{
		alert("Please select the month.")
		document.form1.gCountmonth.focus();
		return false;
	}
	if(document.form1.gCountdate.value=="")
	{
		alert("Please select the date.")
		document.form1.gCountdate.focus();
		return false;
	}

	if(document.form1.gCountyear.value=="")
	{
		alert("Please select the year.")
		document.form1.gCountyear.focus();
		return false;
	}
	if(document.form1.gCounthour.value=="")
	{
		alert("Please select the hour/time.")
		document.form1.gCounthour.focus();
		return false;
	}
	if(document.form1.gCountzoon.value=="")
	{
		alert("Please select the time zoon AM/PM.")
		document.form1.gCountzoon.focus();
		return false;
	}
	if(document.form1.gCountdisplay.value=="")
	{
		alert("Please select the display status.")
		document.form1.gCountdisplay.focus();
		return false;
	}
}