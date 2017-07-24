---
title: "Tactical Graphic Status"
date: 2017-07-14T00:55:10-04:00
draft: false
listdescription: "This page lists all of the tactical graphics defined in MIL-STD-2525C, and shows which graphics are supported in WorldWind."
---

{{< fix-tables >}}

<!--NOTE: Update the list of supported graphics in gov.nasa.worldwind.symbology.milstd2525.MilStd2525TacticalGraphicFactoryTest when this list is updated.-->

This page lists all of the tactical graphics defined in <a href="https://worldwind.arc.nasa.gov/milstd2525c/Mil-STD-2525C.pdf" target="_blank" rel="noopener">MIL-STD-2525C</a>, and shows which graphics are supported in WorldWind.
<ul>
	<li><a href="#tacgrp">Appendix B, Tactical Graphics</a></li>
	<li><a href="#metoc">Appendix C, Meteorological and Oceanographic</a></li>
	<li><a href="#ems">Appendix B, Emergency Management</a></li>
</ul>
<a name="tacgrp"></a>
<h2>Appendix B, Tactical Graphics</h2>
<table>
<tbody>
<tr>
<th>Hierarchy</th>
<th>Description</th>
<th>Supported</th>
</tr>
<tr>
<td>TACGRP.TSK.BLK</td>
<td>Block</td>
<td></td>
</tr>
<tr>
<td>TACGRP.TSK.BRH</td>
<td>Breach</td>
<td></td>
</tr>
<tr>
<td>TACGRP.TSK.BYS</td>
<td>Bypass</td>
<td></td>
</tr>
<tr>
<td>TACGRP.TSK.CNZ</td>
<td>Canalize</td>
<td></td>
</tr>
<tr>
<td>TACGRP.TSK.CLR</td>
<td>Clear</td>
<td></td>
</tr>
<tr>
<td>TACGRP.TSK.CNT</td>
<td>Contain</td>
<td></td>
</tr>
<tr>
<td>TACGRP.TSK.CATK</td>
<td>Counterattack (CATK)</td>
<td></td>
</tr>
<tr>
<td>TACGRP.TSK.CATK.CATKF</td>
<td>Counterattack By Fire</td>
<td></td>
</tr>
<tr>
<td>TACGRP.TSK.DLY</td>
<td>Delay</td>
<td></td>
</tr>
<tr>
<td>TACGRP.TSK.DSTY</td>
<td>Destroy</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.TSK.DRT</td>
<td>Disrupt</td>
<td></td>
</tr>
<tr>
<td>TACGRP.TSK.FIX</td>
<td>Fix</td>
<td></td>
</tr>
<tr>
<td>TACGRP.TSK.FLWASS</td>
<td>Follow And Assume</td>
<td></td>
</tr>
<tr>
<td>TACGRP.TSK.FLWASS.FLWSUP</td>
<td>Follow And Support</td>
<td></td>
</tr>
<tr>
<td>TACGRP.TSK.ITDT</td>
<td>Interdict</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.TSK.ISL</td>
<td>Isolate</td>
<td></td>
</tr>
<tr>
<td>TACGRP.TSK.NEUT</td>
<td>Neutralize</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.TSK.OCC</td>
<td>Occupy</td>
<td></td>
</tr>
<tr>
<td>TACGRP.TSK.PNE</td>
<td>Penetrate</td>
<td></td>
</tr>
<tr>
<td>TACGRP.TSK.RIP</td>
<td>Relief In Place (RIP)</td>
<td></td>
</tr>
<tr>
<td>TACGRP.TSK.RTN</td>
<td>Retain</td>
<td></td>
</tr>
<tr>
<td>TACGRP.TSK.RTM</td>
<td>Retirement</td>
<td></td>
</tr>
<tr>
<td>TACGRP.TSK.SCE</td>
<td>Secure</td>
<td></td>
</tr>
<tr>
<td>TACGRP.TSK.SEC</td>
<td>Security</td>
<td></td>
</tr>
<tr>
<td>TACGRP.TSK.SEC.SCN</td>
<td>Screen</td>
<td></td>
</tr>
<tr>
<td>TACGRP.TSK.SEC.GUD</td>
<td>Guard</td>
<td></td>
</tr>
<tr>
<td>TACGRP.TSK.SEC.COV</td>
<td>Cover</td>
<td></td>
</tr>
<tr>
<td>TACGRP.TSK.SZE</td>
<td>Seize</td>
<td></td>
</tr>
<tr>
<td>TACGRP.TSK.WDR</td>
<td>Withdraw</td>
<td></td>
</tr>
<tr>
<td>TACGRP.TSK.WDR.WDRUP</td>
<td>Withdraw Under Pressure</td>
<td></td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.USW.UH2.DTM</td>
<td>Datum</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.USW.UH2.BCON</td>
<td>Brief Contact</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.USW.UH2.LCON</td>
<td>Lost Contact</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.USW.UH2.SNK</td>
<td>Sinker</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.USW.SNBY</td>
<td>Sonobuoy</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.USW.SNBY.PTNCTR</td>
<td>Pattern Center</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.USW.SNBY.DIFAR</td>
<td>Directional Frequency Analyzing And Recording (DIFAR)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.USW.SNBY.LOFAR</td>
<td>Low Frequency Analyzing And Recording (LOFAR)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.USW.SNBY.CASS</td>
<td>Command Active Sonobuoy System (CASS)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.USW.SNBY.DICASS</td>
<td>Directional Command Active Sonobuoy System (DICASS)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.USW.SNBY.BT</td>
<td>Bathythermograph Transmitting (BT)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.USW.SNBY.ANM</td>
<td>Anm</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.USW.SNBY.VLAD</td>
<td>Vertical Line Array DIFAR (VLAD)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.USW.SNBY.ATAC</td>
<td>Atac</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.USW.SNBY.RO</td>
<td>Range Only (RO)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.USW.SNBY.KGP</td>
<td>Kingpin</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.USW.SNBY.EXP</td>
<td>Sonobuoy-Expired</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.USW.SRH</td>
<td>Search</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.USW.SRH.ARA</td>
<td>Search Area</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.USW.SRH.DIPPSN</td>
<td>DIP Position</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.USW.SRH.CTR</td>
<td>Search Center</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.REFPNT</td>
<td>Reference Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.REFPNT.NAVREF</td>
<td>Navigational Reference Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.REFPNT.SPLPNT</td>
<td>Special Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.REFPNT.DLRP</td>
<td>Dlrp</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.REFPNT.PIM</td>
<td>Point Of Intended Movement (Pim)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.REFPNT.MRSH</td>
<td>Marshall Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.REFPNT.WAP</td>
<td>Waypoint</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.REFPNT.CRDRTB</td>
<td>Corridor Tab</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.REFPNT.PNTINR</td>
<td>Point Of Interest</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.WPN</td>
<td>Weapon</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.WPN.AIMPNT</td>
<td>Aim Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.WPN.DRPPNT</td>
<td>Drop Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.WPN.ENTPNT</td>
<td>Entry Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.WPN.GRDZRO</td>
<td>Ground Zero</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.WPN.MSLPNT</td>
<td>Msl Detect Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.WPN.IMTPNT</td>
<td>Impact Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.WPN.PIPNT</td>
<td>Predicted Impact Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.FRMN</td>
<td>Formation</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.HBR</td>
<td>Harbor (General)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.HBR.PNTQ</td>
<td>Point Q</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.HBR.PNTA</td>
<td>Point A</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.HBR.PNTY</td>
<td>Point Y</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.HBR.PNTX</td>
<td>Point X</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.RTE</td>
<td>Route</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.RTE.RDV</td>
<td>Rendezvous</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.RTE.DVSN</td>
<td>Diversions</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.RTE.WAP</td>
<td>Waypoint</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.RTE.PIM</td>
<td>Pim</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.RTE.PNTR</td>
<td>Point R</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTL</td>
<td>Air Control</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTL.CAP</td>
<td>Combat Air Patrol (CAP)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTL.ABNEW</td>
<td>Airborne Early Warning (AEW)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTL.TAK</td>
<td>Tanking</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTL.ASBWF</td>
<td>Antisubmarine Warfare, Fixed Wing</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTL.ASBWR</td>
<td>Antisubmarine Warfare, Rotary Wing</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTL.SUWF</td>
<td>SUCAP - Fixed Wing</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTL.SUWR</td>
<td>SUCAP - Rotary Wing</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTL.MIWF</td>
<td>IW - Fixed Wing</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTL.MIWR</td>
<td>MIW - Rotary Wing</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTL.SKEIP</td>
<td>Strike Ip</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTL.TCN</td>
<td>Tacan</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTL.TMC</td>
<td>Tomcat</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTL.RSC</td>
<td>Rescue</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTL.RPH</td>
<td>Replenish</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTL.UA</td>
<td>Unmanned Aerial System (UAS/UA)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTL.VTUA</td>
<td>Vtua</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTL.ORB</td>
<td>Orbit</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTL.ORBF8</td>
<td>Orbit - Figure Eight</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTL.ORBRT</td>
<td>Orbit - Race Track</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTL.ORBRD</td>
<td>Orbit - Random, Closed</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTPNT</td>
<td>Action Points (General)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTPNT.CHKPNT</td>
<td>Check Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTPNT.CONPNT</td>
<td>Contact Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTPNT.CRDPNT</td>
<td>Coordination Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTPNT.DCNPNT</td>
<td>Decision Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTPNT.LNKUPT</td>
<td>Linkup Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTPNT.PSSPNT</td>
<td>Passage Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTPNT.RAYPNT</td>
<td>Rally Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTPNT.RELPNT</td>
<td>Release Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTPNT.STRPNT</td>
<td>Start Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTPNT.AMNPNT</td>
<td>Amnesty Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.ACTPNT.WAP</td>
<td>Waypoint</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.SCTL</td>
<td>EA Surface Control Station</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.SCTL.USV</td>
<td>Unmanned Surface Vehicle (USV) Control Station</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.SCTL.USV.RMV</td>
<td>Remote Multimission Vehicle (RMV) Usv Control Station</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.SCTL.USV.ASW</td>
<td>USV - Antisubmarine Warfare Control Station</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.SCTL.USV.SUW</td>
<td>USV - Surface Warfare Control Station</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.SCTL.USV.MIW</td>
<td>USV - Mine Warfare Control Station</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.SCTL.ASW</td>
<td>ASW Control Station</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.SCTL.SUW</td>
<td>SUW Control Station</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.SCTL.MIW</td>
<td>MIW Control Station</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.SCTL.PKT</td>
<td>Picket Control Station</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.SCTL.RDV</td>
<td>Rendezvous Control Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.SCTL.RSC</td>
<td>Rescue Control Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.SCTL.REP</td>
<td>Replenishment Control Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.SCTL.NCBTT</td>
<td>Noncombatant Control Station</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.UCTL</td>
<td>Subsurface Control Station</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.UCTL.UUV</td>
<td>Unmanned Underwater Vehicle (UUV) Control Station</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.UCTL.UUV.ASW</td>
<td>UUV - Antisubmarine Warfare Control Station</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.UCTL.UUV.SUW</td>
<td>UUV - Surface Warfare Control Station</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.UCTL.UUV.MIW</td>
<td>UUV - Mine Warfare Control Station</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.UCTL.SBSTN</td>
<td>Submarine Control Station</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.PNT.UCTL.SBSTN.ASW</td>
<td>ASW Submarine Control Station</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.LNE.BNDS</td>
<td>Boundaries</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.LNE.FLOT</td>
<td>Forward Line Of Own Troops (FLOT)</td>
<td>Yes</td>
</tr>
<tr>
<td>ACGRP.C2GM.GNL.LNE.LOC</td>
<td>Line Of Contact</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.LNE.PHELNE</td>
<td>Phase Line</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.LNE.LITLNE</td>
<td>Light Line</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.ARS.GENARA</td>
<td>General Area</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.ARS.ABYARA</td>
<td>Assembly Area</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.ARS.EMTARA</td>
<td>Engagement Area</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.ARS.FTFDAR</td>
<td>Fortified Area</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.ARS.DRPZ</td>
<td>Drop Zone</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.ARS.EZ</td>
<td>Extraction Zone (EZ)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.ARS.LZ</td>
<td>Landing Zone (LZ)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.ARS.PZ</td>
<td>Pickup Zone (PZ)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.ARS.SRHARA</td>
<td>Search Area/Reconnaissance Area</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.ARS.LAARA</td>
<td>Limited Access Area</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.GNL.ARS.AIRFZ</td>
<td>Airfield Zone</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.AVN.PNT.ACP</td>
<td>Air Control Point (ACP)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.AVN.PNT.COMMCP</td>
<td>Communications Checkpoint (Ccp)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.AVN.PNT.PUP</td>
<td>Pull-Up Point (PUP)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.AVN.PNT.DAPP</td>
<td>Downed Aircrew Pickup Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.AVN.LNE.ACDR</td>
<td>Air Corridor</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.AVN.LNE.MRR</td>
<td>Minimum Risk Route (MRR)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.AVN.LNE.SAAFR</td>
<td>Standard-Use Army Aircraft Flight Route (SAAFR)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.AVN.LNE.UAR</td>
<td>Unmanned Aircraft (UA) Route</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.AVN.LNE.LLTR</td>
<td>Low Level Transit Route (LLTR)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.AVN.ARS.ROZ</td>
<td>Restricted Operations Zone (ROZ)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.AVN.ARS.SHRDEZ</td>
<td>Short-Range Air Defense Engagement Zone (SHORADEZ)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.AVN.ARS.HIDACZ</td>
<td>High Density Airspace Control Zone (HIDACZ)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.AVN.ARS.MEZ</td>
<td>Missile Engagement Zone (MEZ)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.AVN.ARS.MEZ.LAMEZ</td>
<td>Low Altitude Mez</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.AVN.ARS.MEZ.HAMEZ</td>
<td>High Altitude Mez</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.AVN.ARS.WFZ</td>
<td>Weapons Free Zone</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.DCPN.DMY</td>
<td>Dummy (Deception/Decoy)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.DCPN.AAFF</td>
<td>Axis Of Advance For Feint</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.DCPN.DAFF</td>
<td>Direction Of Attack For Feint</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.DCPN.DMA</td>
<td>Decoy Mined Area</td>
<td></td>
</tr>
<tr>
<td>TACGRP.C2GM.DCPN.DMAF</td>
<td>Decoy Mined Area, Fenced</td>
<td></td>
</tr>
<tr>
<td>TACGRP.C2GM.DCPN.DMYMS</td>
<td>Dummy Minefield (Static)</td>
<td></td>
</tr>
<tr>
<td>TACGRP.C2GM.DCPN.DMYMD</td>
<td>Dummy Minefield (Dynamic)</td>
<td></td>
</tr>
<tr>
<td>TACGRP.C2GM.DEF.PNT.TGTREF</td>
<td>Target Reference Point (TRP)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.DEF.PNT.OBSPST</td>
<td>Observation Post/Outpost</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.DEF.PNT.OBSPST.CBTPST</td>
<td>Combat Outpost</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.DEF.PNT.OBSPST.RECON</td>
<td>Observation Post Occupied By Dismounted Scouts Or Reconnaissance</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.DEF.PNT.OBSPST.FWDOP</td>
<td>Forward Observer Position</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.DEF.PNT.OBSPST.SOP</td>
<td>Sensor Outpost/Listening Post (OP/LP)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.DEF.PNT.OBSPST.CBRNOP</td>
<td>Cbrn Observation Post (Dismounted)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.DEF.LNE.FEBA</td>
<td>Forward Edge Of Battle Area (FEBA)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.DEF.LNE.PDF</td>
<td>Principal Direction Of Fire (PDF)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.DEF.ARS.BTLPSN</td>
<td>Battle Position</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.DEF.ARS.BTLPSN.PBNO</td>
<td>Prepared But Not Occupied</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.DEF.ARS.EMTARA</td>
<td>Engagement Area</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.OFF.PNT.PNTD</td>
<td>Point Of Departure</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.OFF.LNE.AXSADV.AVN</td>
<td>Aviation</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.OFF.LNE.AXSADV.ABN</td>
<td>Airborne</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.OFF.LNE.AXSADV.ATK</td>
<td>Attack, Rotary Wing</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.OFF.LNE.AXSADV.GRD.MANATK</td>
<td>Main Attack</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.OFF.LNE.AXSADV.GRD.SUPATK</td>
<td>Supporting Attack</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.OFF.LNE.DIRATK.AVN</td>
<td>Aviation</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.OFF.LNE.DIRATK.GRD.MANATK</td>
<td>Main Attack</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.OFF.LNE.DIRATK.GRD.SUPATK</td>
<td>Supporting Attack</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.OFF.LNE.FCL</td>
<td>Final Coordination Line</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.OFF.LNE.INFNLE</td>
<td>Infiltration Lane</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.OFF.LNE.LMTADV</td>
<td>Limit Of Advance</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.OFF.LNE.LD</td>
<td>Line Of Departure</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.OFF.LNE.LDLC</td>
<td>Line Of Departure/Line Of Contact (LD/LC)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.OFF.LNE.PLD</td>
<td>Probable Line Of Deployment (PLD)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.OFF.ARS.ASTPSN</td>
<td>Assault Position</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.OFF.ARS.ATKPSN</td>
<td>Attack Position</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.OFF.ARS.AFP</td>
<td>Attack By Fire Position</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.OFF.ARS.SFP</td>
<td>Support By Fire Position</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.OFF.ARS.OBJ</td>
<td>Objective</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.OFF.ARS.PBX</td>
<td>Penetration Box</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.SPL.LNE.AMB</td>
<td>Ambush</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.SPL.LNE.HGL</td>
<td>Holding Line</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.SPL.LNE.REL</td>
<td>Release Line</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.SPL.LNE.BRGH</td>
<td>Bridgehead</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.SPL.ARA.AOO</td>
<td>Area Of Operations (AO)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.SPL.ARA.AHD</td>
<td>Airhead</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.SPL.ARA.ENCMT</td>
<td>Encirclement</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.SPL.ARA.NAI</td>
<td>Named Area Of Interest (NAI)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.C2GM.SPL.ARA.TAI</td>
<td>Targeted Area Of Interest (TAI)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.GNL</td>
<td>General</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.GNL.BLT</td>
<td>Belt</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.GNL.LNE</td>
<td>Line</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.GNL.Z</td>
<td>Zone</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.GNL.OFA</td>
<td>Obstacle Free Area</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.GNL.ORA</td>
<td>Obstacle Restricted Area</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.ABS</td>
<td>Abatis</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.ATO</td>
<td>Antitank Obstacles</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.ATO.ATD</td>
<td>Antitank Ditch</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.ATO.ATD.ATDUC</td>
<td>Under Construction</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.ATO.ATD.ATDC</td>
<td>Antitank Ditch Complete</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.ATO.ATDATM</td>
<td>Antitank Ditch Reinforced With Antitank Mines</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.ATO.TDTSM</td>
<td>Antitank Obstacles: Tetrahedrons, Dragons Teeth, And Other Similar Obstacles</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.ATO.TDTSM.FIXPFD</td>
<td>Fixed And Prefabricated</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.ATO.TDTSM.MVB</td>
<td>Moveable</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.ATO.TDTSM.MVBPFD</td>
<td>Moveable And Prefabricated</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.ATO.ATW</td>
<td>Antitank Wall</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.BBY</td>
<td>Booby Trap</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.MNE.USPMNE</td>
<td>Unspecified Mine</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.MNE.ATMNE</td>
<td>Antitank Mine (At)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.MNE.ATMAHD</td>
<td>Antitank Mine With Antihandling Device</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.MNE.ATMDIR</td>
<td>Antitank Mine (Directional)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.MNE.APMNE</td>
<td>Antipersonnel (Ap) Mines</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.MNE.WAMNE</td>
<td>Wide Area Mines</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.MNE.MCLST</td>
<td>Mine Cluster</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.MNEFLD</td>
<td>Minefields</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.MNEFLD.STC</td>
<td>Static Depiction</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.MNEFLD.DYN</td>
<td>Dynamic Depiction</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.MNEFLD.GAP</td>
<td>Gap</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.MNEFLD.MNDARA</td>
<td>Mined Area</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.OBSEFT</td>
<td>Obstacle Effect</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.OBSEFT.BLK</td>
<td>Block</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.OBSEFT.FIX</td>
<td>Fix</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.OBSEFT.TUR</td>
<td>Turn</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.OBSEFT.DRT</td>
<td>Disrupt</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.UXO</td>
<td>Unexploded Ordnance Area (UXO)</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.RCBB</td>
<td>Roadblocks, Craters, And Blown Bridges</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.RCBB.PLND</td>
<td>Planned</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.RCBB.SAFE</td>
<td>Explosives, State Of Readiness 1 (Safe)</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.RCBB.ABP</td>
<td>Explosives, State Of Readiness 2 (Armed-But Passable)</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.RCBB.EXCD</td>
<td>Roadblock (Executed)</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.TRIPWR</td>
<td>Trip Wire</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.WREOBS</td>
<td>Wire Obstacle</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.WREOBS.USP</td>
<td>Unspecified</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.WREOBS.SNGFNC</td>
<td>Single Fence</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.WREOBS.DBLFNC</td>
<td>Double Fence</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.WREOBS.DAFNC</td>
<td>Double Apron Fence</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.WREOBS.LWFNC</td>
<td>Low Wire Fence</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.WREOBS.HWFNC</td>
<td>High Wire Fence</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.WREOBS.CCTA</td>
<td>Concertina</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.WREOBS.CCTA.SNG</td>
<td>Single Concertina</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.WREOBS.CCTA.DBLSTD</td>
<td>Double Strand Concertina</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.WREOBS.CCTA.TRISTD</td>
<td>Triple Strand Concertina</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.AVN</td>
<td>Aviation</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.AVN.TWR.LOW</td>
<td>Low</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.AVN.TWR.HIGH</td>
<td>High</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBST.AVN.OHWIRE</td>
<td>Overhead Wire/Power Line</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBSTBP</td>
<td>Obstacle Bypass</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBSTBP.DFTY</td>
<td>Obstacle Bypass Difficulty</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBSTBP.DFTY.ESY</td>
<td>Bypass Easy</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBSTBP.DFTY.DFT</td>
<td>Bypass Difficult</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBSTBP.DFTY.IMP</td>
<td>Bypass Impossible</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBSTBP.CSGSTE</td>
<td>Crossing Site/Water Crossing</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBSTBP.CSGSTE.ASTCA</td>
<td>Assault Crossing Area</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBSTBP.CSGSTE.BRG</td>
<td>Bridge Or Gap</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBSTBP.CSGSTE.FRY</td>
<td>Ferry</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBSTBP.CSGSTE.FRDESY</td>
<td>Ford Easy</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBSTBP.CSGSTE.FRDDFT</td>
<td>Ford Difficult</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBSTBP.CSGSTE.LANE</td>
<td>Lane</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBSTBP.CSGSTE.RFT</td>
<td>Raft Site</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.OBSTBP.CSGSTE.ERP</td>
<td>Engineer Regulating Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.SU</td>
<td>Survivability</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.SU.ESTOF</td>
<td>Earthwork, Small Trench Or Fortification</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.SU.FRT</td>
<td>Fort</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.SU.FTFDLN</td>
<td>Fortified Line</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.SU.FEWS</td>
<td>Foxhole, Emplacement Or Weapon Site</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.SU.STRGPT</td>
<td>Strong Point</td>
<td></td>
</tr>
<tr>
<td>TACGRP.MOBSU.SU.SUFSHL</td>
<td>Surface Shelter</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.SU.UGDSHL</td>
<td>Underground Shelter</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.CBRN.MSDZ</td>
<td>Minimum Safe Distance Zones</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.CBRN.NDGZ</td>
<td>Nuclear Detonations Ground Zero</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.CBRN.FAOTP</td>
<td>Fallout Producing</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.CBRN.RADA</td>
<td>Radioactive Area</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.CBRN.BIOCA</td>
<td>Biologically Contaminated Area</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.CBRN.CMLCA</td>
<td>Chemically Contaminated Area</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.CBRN.REEVNT.BIO</td>
<td>Biological</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.CBRN.REEVNT.CML</td>
<td>Chemical</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.CBRN.DECONP</td>
<td>Decontamination (Decon) Points</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.CBRN.DECONP.USP</td>
<td>Decon Site/Point (Unspecified)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.CBRN.DECONP.ALTUSP</td>
<td>Alternate Decon Site/Point (Unspecified)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.CBRN.DECONP.TRP</td>
<td>Decon Site/Point (Troops)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.CBRN.DECONP.EQT</td>
<td>Decon Site/Point (Equipment)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.CBRN.DECONP.EQTTRP</td>
<td>Decon Site/Point (Equipment And Troops)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.CBRN.DECONP.OPDECN</td>
<td>Decon Site/Point (Operational Decontamination)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.CBRN.DECONP.TRGH</td>
<td>Decon Site/Point (Thorough Decontamination)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.MOBSU.CBRN.DRCL</td>
<td>Dose Rate Contour Lines</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.PNT.TGT.PTGT</td>
<td>Point/Single Target</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.PNT.TGT.NUCTGT</td>
<td>Nuclear Target</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.PNT.C2PNT</td>
<td>Command & Control Points</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.PNT.C2PNT.FSS</td>
<td>Fire Support Station</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.PNT.C2PNT.SCP</td>
<td>Survey Control Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.PNT.C2PNT.FP</td>
<td>Firing Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.PNT.C2PNT.RP</td>
<td>Reload Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.PNT.C2PNT.HP</td>
<td>Hide Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.PNT.C2PNT.LP</td>
<td>Launch Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.LNE.LNRTGT</td>
<td>Linear Target</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.LNE.LNRTGT.LSTGT</td>
<td>Linear Smoke Target</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.LNE.LNRTGT.FPF</td>
<td>Final Protective Fire (FPF)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.LNE.C2LNE.FSCL</td>
<td>Fire Support Coordination Line (FSCL)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.LNE.C2LNE.CFL</td>
<td>Coordinated Fire Line (CFL)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.LNE.C2LNE.NFL</td>
<td>No-Fire Line (NFL)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.LNE.C2LNE.RFL</td>
<td>Restrictive Fire Line (RFL)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.LNE.C2LNE.MFP</td>
<td>Munition Flight Path (MFP)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.ARATGT</td>
<td>Area Target</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.ARATGT.RTGTGT</td>
<td>Rectangular Target</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.ARATGT.CIRTGT</td>
<td>Circular Target</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.ARATGT.SGTGT</td>
<td>Series Or Group Of Targets</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.ARATGT.SMK</td>
<td>Smoke</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.ARATGT.BMARA</td>
<td>Bomb Area</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.FSA.IRR</td>
<td>Fire Support Area (FSA), Irregular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.FSA.RTG</td>
<td>Fire Support Area (FSA), Rectangular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.FSA.CIRCLR</td>
<td>Fire Support Area (FSA), Circular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.ACA.IRR</td>
<td>Airspace Coordination Area (ACA), Irregular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.ACA.RTG</td>
<td>Airspace Coordination Area (ACA), Rectangular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.ACA.CIRCLR</td>
<td>Airspace Coordination Area (ACA), Circular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.FFA.IRR</td>
<td>Free Fire Area (FFA), Irregular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.FFA.RTG</td>
<td>Free Fire Area (FFA), Rectangular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.FFA.CIRCLR</td>
<td>Free Fire Area (FFA), Circular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.NFA.IRR</td>
<td>No Fire Area (NFA), Irregular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.NFA.RTG</td>
<td>No Fire Area (NFA), Rectangular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.NFA.CIRCLR</td>
<td>No Fire Area (NFA), Circular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.RFA.IRR</td>
<td>Restrictive Fire Area (RFA), Irregular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.RFA.RTG</td>
<td>Restrictive Fire Area (RFA), Rectangular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.RFA.CIRCLR</td>
<td>Restrictive Fire Area (RFA), Circular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.PAA.RTG</td>
<td>Position Area For Artillery (PAA), Rectangular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.PAA.CIRCLR</td>
<td>Position Area For Artillery (PAA), Circular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.SNSZ.IRR</td>
<td>Sensor Zone, Irregular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.SNSZ.RTG</td>
<td>Sensor Zone, Rectangular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.SNSZ.CIRCLR</td>
<td>Sensor Zone , Circular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.DA.IRR</td>
<td>Dead Space Area (DA), Irregular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.DA.RTG</td>
<td>Dead Space Area (DA), Rectangular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.DA.CIRCLR</td>
<td>Dead Space Area (DA), Circular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.ZOR.IRR</td>
<td>Zone Of Responsibility (ZOR), Irregular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.ZOR.RTG</td>
<td>Zone Of Responsibility (ZOR), Rectangular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.ZOR.CIRCLR</td>
<td>Zone Of Responsibility (ZOR), Circular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.TBA.IRR</td>
<td>Target Build Up Area (TBA), Irregular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.TBA.RTG</td>
<td>Target Build Up Area (TBA), Rectangular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.TBA.CIRCLR</td>
<td>Target Build Up Area (TBA), Circular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.TVAR.IRR</td>
<td>Target Value Area (TVAR), Irregular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.TVAR.RTG</td>
<td>Target Value Area (TVAR), Rectangular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.TVAR.CIRCLR</td>
<td>Target Value Area (TVAR), Circular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.C2ARS.TGMF</td>
<td>Terminally Guided Munition Footprint (TGMF)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.TGTAQZ.ATIZ.IRR</td>
<td>Artillery Target Intelligence (ATI) Zone, Irregular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.TGTAQZ.ATIZ.RTG</td>
<td>Artillery Target Intelligence (ATI) Zone, Rectangular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.TGTAQZ.CFFZ.IRR</td>
<td>Call For Fire Zone (CFFZ), Irregular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.TGTAQZ.CFFZ.RTG</td>
<td>Call For Fire Zone (CFFZ), Rectangular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.TGTAQZ.CNS.IRR</td>
<td>Censor Zone, Irregular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.TGTAQZ.CNS.RTG</td>
<td>Censor Zone, Rectangular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.TGTAQZ.CFZ.IRR</td>
<td>Critical Friendly Zone (CFZ), Irregular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.TGTAQZ.CFZ.RTG</td>
<td>Critical Friendly Zone (CFZ), Rectangular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.WPNRF.CIRCLR</td>
<td>Weapon/Sensor Range Fan, Circular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.WPNRF.SCR</td>
<td>Weapon/Sensor Range Fan, Sector</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.KLBOX.BLUE.CIRCLR</td>
<td>Blue Kill Box, Circular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.KLBOX.BLUE.IRR</td>
<td>Blue Kill Box, Irregular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.KLBOX.BLUE.RTG</td>
<td>Blue Kill Box, Rectangular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.KLBOX.PURPLE.CIRCLR</td>
<td>Purple Kill Box, Circular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.KLBOX.PURPLE.IRR</td>
<td>Purple Kill Box, Irregular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.FSUPP.ARS.KLBOX.PURPLE.RTG</td>
<td>Purple Kill Box, Rectangular</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.AEP</td>
<td>Ambulance Exchange Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.CBNP</td>
<td>Cannibalization Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.CCP</td>
<td>Casualty Collection Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.CVP</td>
<td>Civilian Collection Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.DCP</td>
<td>Detainee Collection Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.EPWCP</td>
<td>Enemy Prisoner Of War (EPW) Collection Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.LRP</td>
<td>Logistics Release Point (LRP)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.MCP</td>
<td>Maintenance Collection Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.RRRP</td>
<td>Rearm, Refuel And Resupply Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.ROM</td>
<td>Refuel On The Move (ROM) Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.TCP</td>
<td>Traffic Control Post (TCP)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.TTP</td>
<td>Trailer Transfer Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.UMC</td>
<td>Unit Maintenance Collection Point</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.SPT</td>
<td>Supply Points</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.SPT.GNL</td>
<td>General</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.SPT.CLS1</td>
<td>Class I</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.SPT.CLS2</td>
<td>Class II</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.SPT.CLS3</td>
<td>Class III</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.SPT.CLS4</td>
<td>Class IV</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.SPT.CLS5</td>
<td>Class V</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.SPT.CLS6</td>
<td>Class VI</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.SPT.CLS7</td>
<td>Class VII</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.SPT.CLS8</td>
<td>Class VIII</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.SPT.CLS9</td>
<td>Class IX</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.SPT.CLS10</td>
<td>Class X</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.AP</td>
<td>Ammunition Points</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.AP.ASP</td>
<td>Ammunition Supply Point (ASP)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.PNT.AP.ATP</td>
<td>Ammunition Transfer Point (ATP)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.LNE.CNY</td>
<td>Convoys</td>
<td></td>
</tr>
<tr>
<td>TACGRP.CSS.LNE.CNY.MCNY</td>
<td>Moving Convoy</td>
<td></td>
</tr>
<tr>
<td>TACGRP.CSS.LNE.CNY.HCNY</td>
<td>Halted Convoy</td>
<td></td>
</tr>
<tr>
<td>TACGRP.CSS.LNE.SLPRUT</td>
<td>Supply Routes</td>
<td></td>
</tr>
<tr>
<td>TACGRP.CSS.LNE.SLPRUT.MSRUT</td>
<td>Main Supply Route</td>
<td></td>
</tr>
<tr>
<td>TACGRP.CSS.LNE.SLPRUT.ASRUT</td>
<td>Alternate Supply Route</td>
<td></td>
</tr>
<tr>
<td>TACGRP.CSS.LNE.SLPRUT.1WTRFF</td>
<td>One-Way Traffic</td>
<td></td>
</tr>
<tr>
<td>TACGRP.CSS.LNE.SLPRUT.ATRFF</td>
<td>Alternating Traffic</td>
<td></td>
</tr>
<tr>
<td>TACGRP.CSS.LNE.SLPRUT.2WTRFF</td>
<td>Two-Way Traffic</td>
<td></td>
</tr>
<tr>
<td>TACGRP.CSS.ARA.DHA</td>
<td>Detainee Holding Area</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.ARA.EPWHA</td>
<td>Enemy Prisoner Of War (Epw) Holding Area</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.ARA.FARP</td>
<td>Forward Arming And Refueling Area (FARP)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.ARA.RHA</td>
<td>Refugee Holding Area</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.ARA.SUPARS</td>
<td>Support Areas</td>
<td></td>
</tr>
<tr>
<td>TACGRP.CSS.ARA.SUPARS.BSA</td>
<td>Brigade (BSA)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.ARA.SUPARS.DSA</td>
<td>Division (DSA)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.CSS.ARA.SUPARS.RSA</td>
<td>Regimental (Rsa)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.OTH.ER.DTHAC</td>
<td>Ditched Aircraft</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.OTH.ER.PIW</td>
<td>Person In Water</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.OTH.ER.DSTVES</td>
<td>Distressed Vessel</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.OTH.HAZ.SML</td>
<td>Sea Mine-Like</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.OTH.HAZ.NVGL</td>
<td>Navigational</td>
<td></td>
</tr>
<tr>
<td>TACGRP.OTH.HAZ.IB</td>
<td>Iceberg</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.OTH.HAZ.OLRG</td>
<td>Oil Rig</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.OTH.SSUBSR.BTMRTN</td>
<td>Bottom Return/Non-Milco</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.OTH.SSUBSR.BTMRTN.INS</td>
<td>Installation/Manmade</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.OTH.SSUBSR.BTMRTN.SBRSOO</td>
<td>Seabed Rock/Stone, Obstacle, Other</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.OTH.SSUBSR.BTMRTN.WRKND</td>
<td>Wreck, Non Dangerous</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.OTH.SSUBSR.BTMRTN.WRKD</td>
<td>Wreck, Dangerous</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.OTH.SSUBSR.MARLFE</td>
<td>Marine Life</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.OTH.SSUBSR.SA</td>
<td>Sea Anomaly (Wake, Current, Knuckle)</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.OTH.BERLNE</td>
<td>Bearing Line</td>
<td></td>
</tr>
<tr>
<td>TACGRP.OTH.BERLNE.ELC</td>
<td>Electronic</td>
<td></td>
</tr>
<tr>
<td>TACGRP.OTH.BERLNE.ACU</td>
<td>Acoustic</td>
<td></td>
</tr>
<tr>
<td>TACGRP.OTH.BERLNE.TPD</td>
<td>Torpedo</td>
<td></td>
</tr>
<tr>
<td>TACGRP.OTH.BERLNE.EOPI</td>
<td>Electro-Optical Intercept</td>
<td></td>
</tr>
<tr>
<td>TACGRP.OTH.FIX</td>
<td>Fix</td>
<td></td>
</tr>
<tr>
<td>TACGRP.OTH.FIX.ACU</td>
<td>Acoustic</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.OTH.FIX.EM</td>
<td>Electro-Magnetic</td>
<td>Yes</td>
</tr>
<tr>
<td>TACGRP.OTH.FIX.EOP</td>
<td>Electro-Optical</td>
<td>Yes</td>
</tr>
</tbody>
</table>
 

<a name="metoc"></a>
<h3>Appendix C, Meteorological and Oceanographic</h3>
<table>
<tbody>
<tr>
<th>Hierarchy</th>
<th>Description</th>
<th>Supported</th>
</tr>
<tr>
<td>AMPHC.PRS.LOWCTR</td>
<td>Low pressure center</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.PRS.LOWCTR.CYC</td>
<td>Cyclone center</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.PRS.LOWCTR.TROPLW</td>
<td>Tropopause low</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.PRS.HGHCTR</td>
<td>High pressure center</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.PRS.HGHCTR.ACYC</td>
<td>Anticyclone center</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.PRS.HGHCTR.TROPHG</td>
<td>Tropopause high</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.PRS.FRNSYS</td>
<td>Frontal systems</td>
<td></td>
</tr>
<tr>
<td>AMPHC.PRS.FRNSYS.CLDFRN</td>
<td>Cold front</td>
<td></td>
</tr>
<tr>
<td>AMPHC.PRS.FRNSYS.CLDFRN.UPP</td>
<td>Upper cold front</td>
<td></td>
</tr>
<tr>
<td>AMPHC.PRS.FRNSYS.CLDFRN.FRGS</td>
<td>Cold frontogenesis</td>
<td></td>
</tr>
<tr>
<td>AMPHC.PRS.FRNSYS.CLDFRN.FRLS</td>
<td>Cold frontolysis</td>
<td></td>
</tr>
<tr>
<td>AMPHC.PRS.FRNSYS.WRMFRN</td>
<td>Warm front</td>
<td></td>
</tr>
<tr>
<td>AMPHC.PRS.FRNSYS.WRMFRN.UPP</td>
<td>Upper warm front</td>
<td></td>
</tr>
<tr>
<td>AMPHC.PRS.FRNSYS.WRMFRN.FRGS</td>
<td>Warm frontogenesis</td>
<td></td>
</tr>
<tr>
<td>AMPHC.PRS.FRNSYS.WRMFRN.FRLS</td>
<td>Warm frontolysis</td>
<td></td>
</tr>
<tr>
<td>AMPHC.PRS.FRNSYS.OCD</td>
<td>Occluded front</td>
<td></td>
</tr>
<tr>
<td>AMPHC.PRS.FRNSYS.OCD.UPP</td>
<td>Upper occluded front</td>
<td></td>
</tr>
<tr>
<td>AMPHC.PRS.FRNSYS.OCD.FRLS</td>
<td>Occluded frontolysis</td>
<td></td>
</tr>
<tr>
<td>AMPHC.PRS.FRNSYS.STAT</td>
<td>Stationary front</td>
<td></td>
</tr>
<tr>
<td>AMPHC.PRS.FRNSYS.STAT.UPP</td>
<td>Upper stationary front</td>
<td></td>
</tr>
<tr>
<td>AMPHC.PRS.FRNSYS.STAT.FRGS</td>
<td>Stationary frontogenesis</td>
<td></td>
</tr>
<tr>
<td>AMPHC.PRS.FRNSYS.STAT.FRLS</td>
<td>Stationary frontolysis</td>
<td></td>
</tr>
<tr>
<td>AMPHC.PRS.LNE.TRUAXS</td>
<td>Pressure systems, trough axis</td>
<td></td>
</tr>
<tr>
<td>AMPHC.PRS.LNE.RDGAXS</td>
<td>Ridge axis</td>
<td></td>
</tr>
<tr>
<td>AMPHC.PRS.LNE.SSL</td>
<td>Severe squall line</td>
<td></td>
</tr>
<tr>
<td>AMPHC.PRS.LNE.ISTB</td>
<td>Instability line</td>
<td></td>
</tr>
<tr>
<td>AMPHC.PRS.LNE.SHA</td>
<td>Shear line</td>
<td></td>
</tr>
<tr>
<td>AMPHC.PRS.LNE.ITCZ</td>
<td>Inter-tropical convergance zone</td>
<td></td>
</tr>
<tr>
<td>AMPHC.PRS.LNE.CNGLNE</td>
<td>Convergance line</td>
<td></td>
</tr>
<tr>
<td>AMPHC.PRS.LNE.ITD</td>
<td>Inter-tropical discontinuity</td>
<td></td>
</tr>
<tr>
<td>AMPHC.TRB.LIT</td>
<td>Turbulence - light</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.TRB.MOD</td>
<td>Turbulence - moderate</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.TRB.SVR</td>
<td>Turbulence - severe</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.TRB.EXT</td>
<td>Turbulence - extreme</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.TRB.MNTWAV</td>
<td>Mountain waves</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.ICG.CLR.LIT</td>
<td>Clear icing - light</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.ICG.CLR.MOD</td>
<td>Clear icing - moderate</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.ICG.CLR.SVR</td>
<td>Clear icing - severe</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.ICG.RIME.LIT</td>
<td>Rime icing - light</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.ICG.RIME.MOD</td>
<td>Rime icing - moderate</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.ICG.RIME.SVR</td>
<td>Rime icing - severe</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.ICG.MIX.LIT</td>
<td>Mixed icing - light</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.ICG.MIX.MOD</td>
<td>Mixed icing - moderate</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.ICG.MIX.SVR</td>
<td>Mixed icing - severe</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WND.CALM</td>
<td>Calm winds</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WND.PLT</td>
<td>Wind plot</td>
<td></td>
</tr>
<tr>
<td>AMPHC.WND.JTSM</td>
<td>Jet stream</td>
<td></td>
</tr>
<tr>
<td>AMPHC.WND.SMLNE</td>
<td>Stream line</td>
<td></td>
</tr>
<tr>
<td>AMPHC.CUDCOV.SYM.SKC</td>
<td>Clear sky</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.CUDCOV.SYM.FEW</td>
<td>Few coverage</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.CUDCOV.SYM.SCT</td>
<td>Scattered coverage</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.CUDCOV.SYM.BKN</td>
<td>Broken coverage</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.CUDCOV.SYM.OVC</td>
<td>Overcast coverage</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.CUDCOV.SYM.STOPO</td>
<td>Sky totally or partially obscured</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.RA.INMLIT</td>
<td>Rain - intermittent light</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.RA.INMLIT.CTSLIT</td>
<td>Rain - continuous light</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.RA.INMMOD</td>
<td>Rain - intermittent moderate</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.RA.INMMOD.CTSMOD</td>
<td>Rain - continuous moderate</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.RA.INMHVY</td>
<td>Rain - intermittent heavy</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.RA.INMHVY.CTSHVY</td>
<td>Rain - continuous heavy</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.FZRA.LIT</td>
<td>Freezing rain - light</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.FZRA.MODHVY</td>
<td>Freezing rain - moderate/heavy</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.RASWR.LIT</td>
<td>Rain showers - light</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.RASWR.MODHVY</td>
<td>Rain showers - moderate/heavy</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.RASWR.TOR</td>
<td>Rain showers - torrential</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.DZ.INMLIT</td>
<td>Drizzle - intermittent light</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.DZ.INMLIT.CTSLIT</td>
<td>Drizzle - continuous light</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.DZ.INMMOD</td>
<td>Drizzle - intermittent moderate</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.DZ.INMMOD.CTSMOD</td>
<td>Drizzle - continuous moderate</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.DZ.INMHVY</td>
<td>Drizzle - intermittent heavy</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.DZ.INMHVY.CTSHVY</td>
<td>Drizzle - continuous heavy</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.FZDZ.LIT</td>
<td>Freezing drizzle - light</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.FZDZ.MODHVY</td>
<td>Freezing drizzle - moderate/heavy</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.RASN.RDSLIT</td>
<td>Rain or drizzle and snow - light</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.RASN.RDSMH</td>
<td>Rain or drizzle and snow - moderate/heavy</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.RASN.SWRLIT</td>
<td>Rain and snow showers - light</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.RASN.SWRMOD</td>
<td>Rain and snow showers - moderate/heavy</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.SN.INMLIT</td>
<td>Snow - intermittent light</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.SN.INMLIT.CTSLIT</td>
<td>Snow - continuous light</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.SN.INMMOD</td>
<td>Snow - intermittent moderate</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.SN.INMMOD.CTSMOD</td>
<td>Snow - continuous moderate</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.SN.INMHVY</td>
<td>Snow - intermittent heavy</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.SN.INMHVY.CTSHVY</td>
<td>Snow - continuous heavy</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.SN.BLSNLM</td>
<td>Blowing snow - light/moderate</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.SN.BLSNHY</td>
<td>Blowing snow - heavy</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.SG</td>
<td>Snow grains</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.SSWR.LIT</td>
<td>Snow showers - light</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.SSWR.MODHVY</td>
<td>Snow showers - moderate/heavy</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.HL.LIT</td>
<td>Hail - light not associated with thunder</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.HL.MODHVY</td>
<td>Hail - moderate/heavy not associated with thunder</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.IC</td>
<td>Ice crystals (diamond dust)</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.PE.LIT</td>
<td>Ice pellets - light</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.PE.MOD</td>
<td>Ice pellets - moderate</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.PE.HVY</td>
<td>Ice pellets - heavy</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.STMS.TS</td>
<td>Thunderstorm - no precipitation</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.STMS.TSLMNH</td>
<td>Thunderstorm light to moderate with rain/snow - no hail</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.STMS.TSHVNH</td>
<td>Thunderstorm heavy with rain/snow - no hail</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.STMS.TSLMWH</td>
<td>Thunderstorm light to moderate - with hail</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.STMS.TSHVWH</td>
<td>Thunderstorm heavy - with hail</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.STMS.FC</td>
<td>Funnel cloud (tornado/waterspout)</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.STMS.SQL</td>
<td>Squall</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.STMS.LTG</td>
<td>Lightning</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.FG.SHWPTH</td>
<td>Fog - shallow patches</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.FG.SHWCTS</td>
<td>Fog \-shallow continuous</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.FG.PTHY</td>
<td>Fog - patchy</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.FG.SKYVSB</td>
<td>Fog - sky visible</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.FG.SKYOBD</td>
<td>Fog - sky obscured</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.FG.FZSV</td>
<td>Fog - freezing, sky visible</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.FG.FZSNV</td>
<td>Fog - freezing, sky not visible</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.MIST</td>
<td>Mist</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.FU</td>
<td>Smoke</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.HZ</td>
<td>Haze</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.DTSD.LITMOD</td>
<td>Dust/sand storm - light to moderate</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.DTSD.SVR</td>
<td>Dust/sand storm - severe</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.DTSD.DTDVL</td>
<td>Dust devil</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.DTSD.BLDTSD</td>
<td>Blowing dust or sand</td>
<td></td>
</tr>
<tr>
<td>AMPHC.WTH.TPLSYS.TROPDN</td>
<td>Tropical depression</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.TPLSYS.TROPSM</td>
<td>Tropical storm</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.TPLSYS.HC</td>
<td>Hurricane/typhoon</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.TPLSYS.TSWADL</td>
<td>Tropical storm wind areas and date/time labels</td>
<td></td>
</tr>
<tr>
<td>AMPHC.WTH.VOLERN</td>
<td>Volcanic eruption</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.VOLERN.VOLASH</td>
<td>Volcanic ash</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.TROPLV</td>
<td>Tropopause level</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.FZLVL</td>
<td>Freezing level</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.WTH.POUTAI</td>
<td>Precipitation of unknown type and intensity</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.BDAWTH.IFR</td>
<td>Instrument flight rule (IFR)</td>
<td></td>
</tr>
<tr>
<td>AMPHC.BDAWTH.MVFR</td>
<td>Marginal visual flight rule (MVFR)</td>
<td></td>
</tr>
<tr>
<td>AMPHC.BDAWTH.TRB</td>
<td>Turbulence</td>
<td></td>
</tr>
<tr>
<td>AMPHC.BDAWTH.ICG</td>
<td>Icing</td>
<td></td>
</tr>
<tr>
<td>AMPHC.BDAWTH.LPNCI</td>
<td>Liquid precipitation - non-convective</td>
<td></td>
</tr>
<tr>
<td>AMPHC.BDAWTH.LPNCI.LPC</td>
<td>Liquid precipitation - convective</td>
<td></td>
</tr>
<tr>
<td>AMPHC.BDAWTH.FZPPN</td>
<td>Freezing/frozen precipitation</td>
<td></td>
</tr>
<tr>
<td>AMPHC.BDAWTH.TS</td>
<td>Thunderstorms</td>
<td></td>
</tr>
<tr>
<td>AMPHC.BDAWTH.FG</td>
<td>Fog</td>
<td></td>
</tr>
<tr>
<td>AMPHC.BDAWTH.DTSD</td>
<td>Dust or sand</td>
<td></td>
</tr>
<tr>
<td>AMPHC.BDAWTH.ODFF</td>
<td>Operator-defined freeform</td>
<td></td>
</tr>
<tr>
<td>AMPHC.ISP.ISB</td>
<td>Isobar - surface</td>
<td></td>
</tr>
<tr>
<td>AMPHC.ISP.CTUR</td>
<td>Contour - upper air</td>
<td></td>
</tr>
<tr>
<td>AMPHC.ISP.IST</td>
<td>Isotherm</td>
<td></td>
</tr>
<tr>
<td>AMPHC.ISP.ISH</td>
<td>Isotach</td>
<td></td>
</tr>
<tr>
<td>AMPHC.ISP.ISD</td>
<td>Isodrosotherm</td>
<td></td>
</tr>
<tr>
<td>AMPHC.ISP.THK</td>
<td>Thickness</td>
<td></td>
</tr>
<tr>
<td>AMPHC.ISP.ODFF</td>
<td>Operator-defined freeform</td>
<td></td>
</tr>
<tr>
<td>AMPHC_STOG_WOSMIC_SUFDRY</td>
<td>Surface dry</td>
<td></td>
</tr>
<tr>
<td>AMPHC.STOG.WOSMIC.SUFMST</td>
<td>Surface moist</td>
<td></td>
</tr>
<tr>
<td>AMPHC.STOG.WOSMIC.SUFWET</td>
<td>Surface wet</td>
<td></td>
</tr>
<tr>
<td>AMPHC.STOG.WOSMIC.SUFFLD</td>
<td>Surface flooded</td>
<td></td>
</tr>
<tr>
<td>AMPHC.STOG.WOSMIC.SUFFZN</td>
<td>Surface frozen</td>
<td></td>
</tr>
<tr>
<td>AMPHC.STOG.WOSMIC.GLZGRD</td>
<td>Glaze (thin ice) on ground</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.STOG.WOSMIC.LDNCGC</td>
<td>Loose dry dust or sand not covering ground completely</td>
<td></td>
</tr>
<tr>
<td>AMPHC.STOG.WOSMIC.TLDCGC</td>
<td>Thin loose dry dust or sand covering ground completely</td>
<td></td>
</tr>
<tr>
<td>AMPHC.STOG.WOSMIC.MLDCGC</td>
<td>Moderate/thick loose dry dust or sand covering ground completely</td>
<td></td>
</tr>
<tr>
<td>AMPHC.STOG.WOSMIC.EXTDWC</td>
<td>Extremely dry with cracks</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.STOG.WSMIC.PDMIC</td>
<td>Predominately ice covered</td>
<td>Yes</td>
</tr>
<tr>
<td>AMPHC.STOG.WSMIC.CWSNLH</td>
<td>Compact or wet snow (with or without ice)</td>
<td></td>
</tr>
<tr>
<td>AMPHC.STOG.WSMIC.CSNALH</td>
<td>Compact or wet snow (with or without ice)</td>
<td></td>
</tr>
<tr>
<td>AMPHC.STOG.WSMIC.ELCSCG</td>
<td>Even layer of compact or wet snow covering</td>
<td></td>
</tr>
<tr>
<td>AMPHC.STOG.WSMIC.ULCSCG</td>
<td>Uneven layer of compact or wet snow</td>
<td></td>
</tr>
<tr>
<td>AMPHC.STOG.WSMIC.LDSNLH</td>
<td>Loose dry snow covering less than one-half</td>
<td></td>
</tr>
<tr>
<td>AMPHC.STOG.WSMIC.LDSALH</td>
<td>Loose dry snow covering at least one-half</td>
<td></td>
</tr>
<tr>
<td>AMPHC.STOG.WSMIC.ELDSCG</td>
<td>Even layer of loose dry snow covering</td>
<td></td>
</tr>
<tr>
<td>AMPHC.STOG.WSMIC.ULDSCG</td>
<td>Uneven layer of loose dry snow covering</td>
<td></td>
</tr>
<tr>
<td>AMPHC.STOG.WSMIC.SCGC</td>
<td>Snow covering ground Yesly</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.ISYS.IB</td>
<td>Icebergs</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.ISYS.IB.MNY</td>
<td>Many icebergs</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.ISYS.IB.BAS</td>
<td>Belts and strips</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.ISYS.IB.GNL</td>
<td>Iceberg \-general</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.ISYS.IB.MNYGNL</td>
<td>Many icebergs \-general</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.ISYS.IB.BB</td>
<td>Bergy bit</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.ISYS.IB.MNYBB</td>
<td>Many bergy bits</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.ISYS.IB.GWL</td>
<td>Growler</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.ISYS.IB.MNYGWL</td>
<td>Many growlers</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.ISYS.IB.FBG</td>
<td>Floeberg</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.ISYS.IB.II</td>
<td>Ice island</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.ISYS.ICN.BW</td>
<td>Bergy water</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.ISYS.ICN.WWRT</td>
<td>Water with radar targets</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.ISYS.ICN.IF</td>
<td>Ice free</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.ISYS.DYNPRO.CNG</td>
<td>Convergence</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.ISYS.DYNPRO.DVG</td>
<td>Divergence</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.ISYS.DYNPRO.SHAZ</td>
<td>Shearing or shear zone</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.ISYS.DYNPRO.ID</td>
<td>Ice drift (direction)</td>
<td></td>
</tr>
<tr>
<td>OCA.ISYS.SI</td>
<td>Sea ice</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.ISYS.SI.ITOBS</td>
<td>Ice thickness (observed)</td>
<td></td>
</tr>
<tr>
<td>OCA.ISYS.SI.ITEST</td>
<td>Ice thickness (estimated)</td>
<td></td>
</tr>
<tr>
<td>OCA.ISYS.SI.MPOFI</td>
<td>Melt puddles or flooded ice</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.ISYS.LMT.LOVO</td>
<td>Limit of visual observation</td>
<td></td>
</tr>
<tr>
<td>OCA.ISYS.LMT.LOU</td>
<td>Limit of undercast</td>
<td></td>
</tr>
<tr>
<td>OCA.ISYS.LMT.LORO</td>
<td>Limit of radar observation</td>
<td></td>
</tr>
<tr>
<td>OCA.ISYS.LMT.OIEOB</td>
<td>Observed ice edge or boundary</td>
<td></td>
</tr>
<tr>
<td>OCA.ISYS.LMT.EIEOB</td>
<td>Estimated ice edge or boundary</td>
<td></td>
</tr>
<tr>
<td>OCA.ISYS.LMT.IEOBFR</td>
<td>Ice edge or boundary from radar</td>
<td></td>
</tr>
<tr>
<td>OCA.ISYS.OITI.CRK</td>
<td>Openings in the ice, cracks</td>
<td></td>
</tr>
<tr>
<td>OCA.ISYS.OITI.CRKASL</td>
<td>Cracks at a specific location</td>
<td></td>
</tr>
<tr>
<td>OCA.ISYS.OITI.LED</td>
<td>Lead</td>
<td></td>
</tr>
<tr>
<td>OCA.ISYS.OITI.FZLED</td>
<td>Frozen lead</td>
<td></td>
</tr>
<tr>
<td>OCA.ISYS.SC</td>
<td>Snow cover</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.ISYS.SC.SWO</td>
<td>Sastrugi (with orientation)</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.ISYS.TOPFTR.HUM</td>
<td>Ridges or hummocks</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.ISYS.TOPFTR.RFTG</td>
<td>Rafting</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.ISYS.TOPFTR.JBB</td>
<td>Jammed brash barrier</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.DPH.SNDG</td>
<td>Soundings</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.DPH.CRV</td>
<td>Depth curve</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.DPH.CTUR</td>
<td>Depth contour</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.DPH.ARA</td>
<td>Depth area</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.CSTHYD.CSTLN</td>
<td>Coastline</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.CSTHYD.ISND</td>
<td>Island</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.CSTHYD.BEH</td>
<td>Beach</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.CSTHYD.H2O</td>
<td>Water</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.CSTHYD.FSH1.FSH2</td>
<td>Foreshore</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.CSTHYD.FSH1.FSH3</td>
<td>Foreshore</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.PRTHBR.PRT.BRHSO</td>
<td>Berths (onshore)</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.PRTHBR.PRT.BRHSA</td>
<td>Berths (anchor)</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.PRTHBR.PRT.ANCRG1</td>
<td>Anchorage</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.PRTHBR.PRT.ANCRG2</td>
<td>Anchorage</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.PRTHBR.PRT.ANCRG3</td>
<td>Anchorage</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.PRTHBR.PRT.CIP</td>
<td>Call in point</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.PRTHBR.PRT.PWQ</td>
<td>Pier/wharf/quay</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.PRTHBR.FSG.FSGHBR</td>
<td>Fishing harbor</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.PRTHBR.FSG.FSTK1</td>
<td>Fish stakes/traps/weirs</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.PRTHBR.FSG.FSTK2</td>
<td>Fish stakes/traps/weirs</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.PRTHBR.FSG.FSTK3</td>
<td>Fish stakes/traps/weirs</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.PRTHBR.FAC.DDCK</td>
<td>Drydock</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.PRTHBR.FAC.LNDPLC</td>
<td>Landing place</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.PRTHBR.FAC.OSLF1</td>
<td>Offshore loading facility</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.PRTHBR.FAC.OSLF2</td>
<td>Offshore loading facility</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.PRTHBR.FAC.OSLF3</td>
<td>Offshore loading facility</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.PRTHBR.FAC.RAMPAW</td>
<td>Ramp (above water)</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.PRTHBR.FAC.RAMPBW</td>
<td>Ramp (below water)</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.PRTHBR.FAC.LNDRNG</td>
<td>Landing ring</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.PRTHBR.FAC.FRYCSG</td>
<td>Ferry crossing</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.PRTHBR.FAC.CFCSG</td>
<td>Cable ferry crossing</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.PRTHBR.FAC.DOPN</td>
<td>Dolphin</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.PRTHBR.SHRLNE.BWGJAW</td>
<td>Breakwater/groin/jetty</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.PRTHBR.SHRLNE.BWGJBW</td>
<td>Breakwater/groin/jetty</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.PRTHBR.SHRLNE.SW</td>
<td>Seawall</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.ATN.BCN</td>
<td>Beacon</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.ATN.BUOY</td>
<td>Buoy default</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.ATN.MRK</td>
<td>Marker</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.ATN.PRH1.PRH2</td>
<td>Perches/stakes</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.ATN.PRH1.PRH3</td>
<td>Perches/stakes</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.ATN.LIT</td>
<td>Light</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.ATN.LDGLNE</td>
<td>Leading line</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.ATN.LITVES</td>
<td>Light vessel/lightship</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.ATN.LITHSE</td>
<td>Lighthouse</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.DANHAZ.RCKSBM</td>
<td>Rock submergered</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.DANHAZ.RCKAWD</td>
<td>Rock awashed</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.DANHAZ.UH2DAN</td>
<td>Underwater danger/hazard</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.DANHAZ.FLGRD1.FLGRD2</td>
<td>Foul ground</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.DANHAZ.FLGRD1.FLGRD3</td>
<td>Foul ground</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.DANHAZ.KLP1.KLP2</td>
<td>Kelp/seaweed</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.DANHAZ.KLP1.KLP3</td>
<td>Kelp/seaweed</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.DANHAZ.MNENAV.DBT</td>
<td>Mine - naval (doubtful)</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.DANHAZ.MNENAV.DEFN</td>
<td>Mine - naval (definite)</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.DANHAZ.SNAG</td>
<td>Snags/stumps</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.DANHAZ.WRK.UCOV</td>
<td>Wreck (uncovers)</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.DANHAZ.WRK.SBM</td>
<td>Wreck (submerged)</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.DANHAZ.BRKS</td>
<td>Breakers</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.DANHAZ.REEF</td>
<td>Reef</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.DANHAZ.EOTR</td>
<td>Eddies/overfalls/tide rips</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.DANHAZ.DCDH2O</td>
<td>Discolored water</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.BTMFAT.BTMCHR.SD</td>
<td>Sand</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.BTMFAT.BTMCHR.MUD</td>
<td>Mud</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.BTMFAT.BTMCHR.CLAY</td>
<td>Clay</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.BTMFAT.BTMCHR.SLT</td>
<td>Silt</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.BTMFAT.BTMCHR.STNE</td>
<td>Stones</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.BTMFAT.BTMCHR.GVL</td>
<td>Gravel</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.BTMFAT.BTMCHR.PBL</td>
<td>Pebbles</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.BTMFAT.BTMCHR.COBL</td>
<td>Cobbles</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.BTMFAT.BTMCHR.RCK</td>
<td>Rock</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.BTMFAT.BTMCHR.CRL</td>
<td>Coral</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.BTMFAT.BTMCHR.SHE</td>
<td>Shell</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.BTMFAT.QLFYTM.FNE</td>
<td>Qualifying terms, fine</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.BTMFAT.QLFYTM.MDM</td>
<td>Qualifying terms, medum</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.BTMFAT.QLFYTM.CSE</td>
<td>Qualifying terms, coarse</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.TDECUR.H2OTRB</td>
<td>Water turbulence</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.TDECUR.EBB</td>
<td>Current flow - ebb</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.TDECUR.FLOOD</td>
<td>Current flow - flood</td>
<td></td>
</tr>
<tr>
<td>OCA.HYDGRY.TDECUR.TDEDP</td>
<td>Tide data point</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.HYDGRY.TDECUR.TDEG</td>
<td>Tide gauge</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.OCNGRY.BIOLUM.VDR1.2</td>
<td>Bioluminescence, vdr level 1-2</td>
<td></td>
</tr>
<tr>
<td>OCA.OCNGRY.BIOLUM.VDR2.3</td>
<td>Bioluminescence, vdr level 2-3</td>
<td></td>
</tr>
<tr>
<td>OCA.OCNGRY.BIOLUM.VDR3.4</td>
<td>Bioluminescence, vdr level 3-4</td>
<td></td>
</tr>
<tr>
<td>OCA.OCNGRY.BIOLUM.VDR4.5</td>
<td>Bioluminescence, vdr level 4-5</td>
<td></td>
</tr>
<tr>
<td>OCA.OCNGRY.BIOLUM.VDR5.6</td>
<td>Bioluminescence, vdr level 5-6</td>
<td></td>
</tr>
<tr>
<td>OCA.OCNGRY.BIOLUM.VDR6.7</td>
<td>Bioluminescence, vdr level 6-7</td>
<td></td>
</tr>
<tr>
<td>OCA.OCNGRY.BIOLUM.VDR7.8</td>
<td>Bioluminescence, vdr level 7-8</td>
<td></td>
</tr>
<tr>
<td>OCA.OCNGRY.BIOLUM.VDR8.9</td>
<td>Bioluminescence, vdr level 8-9</td>
<td></td>
</tr>
<tr>
<td>OCA.OCNGRY.BIOLUM.VDR9.0</td>
<td>Bioluminescence, vdr level 9-10</td>
<td></td>
</tr>
<tr>
<td>OCA.OCNGRY.BEHSPE.FLT</td>
<td>Flat</td>
<td></td>
</tr>
<tr>
<td>OCA.OCNGRY.BEHSPE.GTL</td>
<td>Gentle</td>
<td></td>
</tr>
<tr>
<td>OCA.OCNGRY.BEHSPE.MOD</td>
<td>Moderate</td>
<td></td>
</tr>
<tr>
<td>OCA.OCNGRY.BEHSPE.STP</td>
<td>Steep</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBS.SLDRCK</td>
<td>Miw-bottom sediments, solid rock</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBS.CLAY</td>
<td>Miw-bottom sediments, clay</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBS.VCSESD</td>
<td>Very coarse sand</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBS.CSESD</td>
<td>Miw-bottom sediments, coarse sand</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBS.MDMSD</td>
<td>Miw-bottom sediments, medium sand</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBS.FNESD</td>
<td>Miw-bottom sediments, fine sand</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBS.VFNESD</td>
<td>Miw-bottom sediments, very fine sand</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBS.VFNSLT</td>
<td>Miw-bottom sediments, very fine silt</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBS.FNESLT</td>
<td>Miw-bottom sediments, file silt</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBS.MDMSLT</td>
<td>Miw-bottom sediments, medium silt</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBS.CSESLT</td>
<td>Miw-bottom sediments, coarse silt</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBS.BLDS</td>
<td>Boulders</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBS.COBLOS</td>
<td>Cobbles, oyster shells</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBS.PBLSHE</td>
<td>Pebbles, shells</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBS.SD.SHE</td>
<td>Sand and shells</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBS.LND</td>
<td>Miw-bottom sediments, land</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBS.NODAT</td>
<td>No data</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.BTMRGN.SMH</td>
<td>Bottom roughness, smooth</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.BTMRGN.MOD</td>
<td>Bottom roughness, moderate</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.BTMRGN.RGH</td>
<td>Bottom roughness, rough</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.CTRB.LW</td>
<td>Low</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.CTRB.MDM</td>
<td>Medium</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.CTRB.HGH</td>
<td>High</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.IMTBUR.0</td>
<td>Impact burial, 0%</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.IMTBUR.0.10</td>
<td>Impact burial, 0-10%</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.IMTBUR.10.20</td>
<td>Impact burial, 10-20%</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.IMTBUR.20.75</td>
<td>Impact burial, 20-75%</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.IMTBUR.75</td>
<td>Impact burial, >75%</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBC.A</td>
<td>Miw bottom category, a</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBC.B</td>
<td>Miw bottom category, b</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBC.C</td>
<td>Miw bottom category, c</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBT.A1</td>
<td>Miw bottom type, a1</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBT.A2</td>
<td>Miw bottom type, a2</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBT.A3</td>
<td>Miw bottom type, a3</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBT.B1</td>
<td>Miw bottom type, b1</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBT.B2</td>
<td>Miw bottom type, b2</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBT.B3</td>
<td>Miw bottom type, b3</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBT.C1</td>
<td>Miw bottom type, c1</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBT.C2</td>
<td>Miw bottom type, c2</td>
<td></td>
</tr>
<tr>
<td>OCA.GPHY.MNEWBD.MIWBT.C3</td>
<td>Miw bottom type, c3</td>
<td></td>
</tr>
<tr>
<td>OCA.LMT.MARTLB</td>
<td>Maritime limit boundary</td>
<td></td>
</tr>
<tr>
<td>OCA.LMT.MARTAR</td>
<td>Maritime area</td>
<td></td>
</tr>
<tr>
<td>OCA.LMT.RSDARA</td>
<td>Restricted area</td>
<td></td>
</tr>
<tr>
<td>OCA.LMT.SWPARA</td>
<td>Swept area</td>
<td></td>
</tr>
<tr>
<td>OCA.LMT.TRGARA</td>
<td>Training area</td>
<td></td>
</tr>
<tr>
<td>OCA.LMT.OD</td>
<td>Operator-defined</td>
<td></td>
</tr>
<tr>
<td>OCA.MMD.SUBCBL</td>
<td>Submarine cable</td>
<td></td>
</tr>
<tr>
<td>OCA.MMD.SBMCRB</td>
<td>Submerged crib</td>
<td></td>
</tr>
<tr>
<td>OCA.MMD.CNL</td>
<td>Canal</td>
<td></td>
</tr>
<tr>
<td>OCA.MMD.FRD</td>
<td>Ford</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.MMD.LCK</td>
<td>Lock</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.MMD.OLRG</td>
<td>Oil/gas rig</td>
<td>Yes</td>
</tr>
<tr>
<td>OCA.MMD.OLRGFD</td>
<td>Oil/gas rig field</td>
<td></td>
</tr>
<tr>
<td>OCA.MMD.PPELNE</td>
<td>Pipelines/pipe</td>
<td></td>
</tr>
<tr>
<td>OCA.MMD.PLE</td>
<td>Pile/piling/post</td>
<td>Yes</td>
</tr>
</tbody>
</table>
 

<a name="ems"></a>
<h3>Appendix G, Emergency Management</h3>
<table>
<tbody>
<tr>
<th>Hierarchy</th>
<th>Description</th>
<th>Supported</th>
</tr>
<tr>
<td>NATEVT.GEO.AFTSHK</td>
<td>Aftershock</td>
<td>Yes</td>
</tr>
<tr>
<td>NATEVT.GEO.AVL</td>
<td>Avalanche</td>
<td>Yes</td>
</tr>
<tr>
<td>NATEVT.GEO.EQKEPI</td>
<td>Earthquake epicenter</td>
<td>Yes</td>
</tr>
<tr>
<td>NATEVT.GEO.LNDSLD</td>
<td>Landslide</td>
<td>Yes</td>
</tr>
<tr>
<td>NATEVT.GEO.SBSDNC</td>
<td>Subsidence</td>
<td>Yes</td>
</tr>
<tr>
<td>NATEVT.GEO.VLCTHT</td>
<td>Volcanic threat</td>
<td>Yes</td>
</tr>
<tr>
<td>NATEVT.HYDMET.DRGHT</td>
<td>Drought</td>
<td>Yes</td>
</tr>
<tr>
<td>NATEVT.HYDMET.FLD</td>
<td>Flood</td>
<td>Yes</td>
</tr>
<tr>
<td>NATEVT.HYDMET.INV</td>
<td>Inversion</td>
<td>Yes</td>
</tr>
<tr>
<td>NATEVT.HYDMET.TSNMI</td>
<td>Tsunami</td>
<td>Yes</td>
</tr>
<tr>
<td>NATEVT.INFST.BIRD</td>
<td>Bird infestation</td>
<td>Yes</td>
</tr>
<tr>
<td>NATEVT.INFST.INSCT</td>
<td>Insect infestation</td>
<td>Yes</td>
</tr>
<tr>
<td>NATEVT.INFST.MICROB</td>
<td>Microbial infestation</td>
<td>Yes</td>
</tr>
<tr>
<td>NATEVT.INFST.REPT</td>
<td>Reptile infestation</td>
<td>Yes</td>
</tr>
<tr>
<td>NATEVT.INFST.RDNT</td>
<td>Rodent infestation</td>
<td>Yes</td>
</tr>
</tbody>
</table>