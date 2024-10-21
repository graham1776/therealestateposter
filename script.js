const companiesData = {
    logistics: [
        // Mega Companies
        { name: "Prologis", rank: "mega", url: "https://www.prologis.com" },
        { name: "Link Logistics", rank: "mega", url: "https://www.linklogistics.com" },
        { name: "EQT Exeter", rank: "mega", url: "https://www.eqtexeter.com" },
        { name: "Rexford", rank: "mega", url: "https://www.rexfordindustrial.com" },
        { name: "GIC", rank: "mega", url: "https://www.gic.com.sg" },
    
        // Big Companies
        { name: "Clarion", rank: "big", url: "https://www.clarionpartners.com" },
        { name: "Ares", rank: "big", url: "https://www.aresmgmt.com" },
        { name: "STAG", rank: "big", url: "https://www.stagindustrial.com" },
        { name: "Nuveen", rank: "big", url: "https://www.nuveen.com" },
        { name: "Majestic", rank: "big", url: "https://www.majesticrealty.com" },
        { name: "First Industrial", rank: "big", url: "https://www.firstindustrial.com" },
        { name: "Goodman Group", rank: "big", url: "https://www.goodman.com" },
        { name: "Hines", rank: "big", url: "https://www.hines.com" },
        { name: "CBRE IM", rank: "big", url: "https://www.cbreim.com" },
        { name: "Panattoni", rank: "big", url: "https://www.panattoni.com" },
        { name: "CenterPoint", rank: "big", url: "https://www.centerpoint.com" },
        { name: "EastGroup", rank: "big", url: "https://www.eastgroup.net" },
        { name: "W.P. Carey", rank: "big", url: "https://www.wpcarey.com" },
        { name: "LBA Logistics", rank: "big", url: "https://www.lbalogistics.com" },
        { name: "BentallGreenOak", rank: "big", url: "https://www.bentallgreenoak.com" },
        { name: "Dermody", rank: "big", url: "https://www.dermody.com" },
        { name: "AEW", rank: "big", url: "https://www.aew.com" },
        { name: "Barings", rank: "big", url: "https://www.barings.com" },
        { name: "Brookfield", rank: "big", url: "https://www.brookfieldproperties.com" },
        { name: "Mapletree", rank: "big", url: "https://www.mapletree.com.sg" },
        { name: "Lineage", rank: "big", url: "https://www.lineagelogistics.com" },
        { name: "Bridge", rank: "big", url: "https://www.bridgeindustrial.com" },
        { name: "Becknell", rank: "big", url: "https://www.becknellindustrial.com" },
    
        // Middle Companies
        { name: "LXP", rank: "middle", url: "https://www.lxp.com" },
        { name: "Terreno", rank: "middle", url: "https://www.terreno.com" },
        { name: "Dalfen", rank: "middle", url: "https://www.dalfen.com" },
        { name: "IDI", rank: "middle", url: "https://www.idilogistics.com" },
        { name: "Brennan", rank: "middle", url: "https://www.brennanllc.com" },
        { name: "Hartz Mountain", rank: "middle", url: "https://www.hartzmountain.com" },
        { name: "LaSalle", rank: "middle", url: "https://www.lasalle.com" },
        { name: "DWS Group", rank: "middle", url: "https://www.dws.com" },
        { name: "USAA", rank: "middle", url: "https://www.usrealco.com" },
        { name: "Transwestern", rank: "middle", url: "https://www.transwestern.com" },
        { name: "Crow Holdings", rank: "middle", url: "https://www.crowholdings.com" },
        { name: "KKR", rank: "middle", url: "https://www.kkr.com" },
        { name: "Scannell", rank: "middle", url: "https://www.scannellproperties.com" },
        { name: "Core5", rank: "middle", url: "https://www.c5ip.com" },
        { name: "NorthPoint", rank: "middle", url: "https://www.beyondthecontract.com" },
        { name: "CRG", rank: "middle", url: "https://www.realcrg.com" },
        { name: "IDS", rank: "middle", url: "https://www.idsrealestate.com" },
        { name: "Alere", rank: "middle", url: "http://www.alereproperty.com" },
        { name: "Wonderful", rank: "middle", url: "https://www.wonderfulrealestate.com" },
        { name: "Seagis", rank: "middle", url: "https://www.seagisproperty.com" },
        { name: "WPT", rank: "middle", url: "https://wptcapital.com/" },
    
        // Small Companies
        { name: "ILPT", rank: "small", url: "https://www.ilptreit.com" },
        { name: "Harbor Group", rank: "small", url: "https://www.harborgroupint.com" },
        { name: "Ashley Capital", rank: "small", url: "https://www.ashleycapital.com" },
        { name: "Inland Real Estate Group", rank: "small", url: "https://www.inlandgroup.com" },
        { name: "Easterly Government Properties", rank: "small", url: "https://www.easterlyreit.com" },
        { name: "Cabot Properties", rank: "small", url: "https://www.cabotprop.com" },
        { name: "Seefried", rank: "small", url: "https://www.seefriedproperties.com" },
        { name: "Sealy & Company", rank: "small", url: "https://www.sealyco.com" },
        { name: "Foundry Commercial", rank: "small", url: "https://www.foundrycommercial.com" },
        { name: "CapRock Partners", rank: "small", url: "https://www.caprock-partners.com" },
        { name: "Conor Commercial", rank: "small", url: "https://www.conor.com" },
        { name: "Molto Properties", rank: "small", url: "https://www.molto-properties.com" },
        { name: "Dogwood Industrial Properties", rank: "small", url: "https://www.dogwoodindustrial.com" },
    ],

    multifamily: [
        // Mega Companies
        { name: "Greystar Real Estate Partners", rank: "mega", url: "https://www.greystar.com" },
        { name: "Equity Residential", rank: "mega", url: "https://www.equityapartments.com" },
        { name: "AvalonBay Communities", rank: "mega", url: "https://www.avaloncommunities.com" },

        // Big Companies
        { name: "Essex Property Trust", rank: "big", url: "https://www.essexapartmenthomes.com" },
        { name: "Camden Property Trust", rank: "big", url: "https://www.camdenliving.com" },
        { name: "MAA (Mid-America Apartment Communities)", rank: "big", url: "https://www.maac.com" },
        { name: "UDR, Inc.", rank: "big", url: "https://www.udr.com" },
        { name: "Cortland", rank: "big", url: "https://www.cortland.com" },
        { name: "Lincoln Property Company", rank: "big", url: "https://www.lincolnapts.com" },
        { name: "Gables Residential", rank: "big", url: "https://www.gables.com" },
        { name: "Alliance Residential Company", rank: "big", url: "https://www.allresco.com" },
        { name: "Fairfield Residential", rank: "big", url: "https://www.fairfieldresidential.com" },
        { name: "Bozzuto Group", rank: "big", url: "https://www.bozzuto.com" },
        { name: "Related Companies", rank: "big", url: "https://www.related.com" },
        { name: "Morgan Properties", rank: "big", url: "https://www.morganproperties.com" },
        { name: "GoldOller Real Estate Investments", rank: "big", url: "https://www.goldoller.com" },
        { name: "BH Management Services", rank: "big", url: "https://www.bhmanagement.com" },

        // Middle Companies
        { name: "Pinnacle Property Management Services", rank: "middle", url: "https://www.pinnacleliving.com" },
        { name: "Bell Partners", rank: "middle", url: "https://www.bellpartnersinc.com" },
        { name: "Wood Residential", rank: "middle", url: "https://www.woodresidential.com" },
        { name: "ConAm Management Corporation", rank: "middle", url: "https://www.conam.com" },
        { name: "The Bainbridge Companies", rank: "middle", url: "https://www.bainbridgecompanies.com" },
        { name: "LMC, a Lennar Company", rank: "middle", url: "https://www.livelmc.com" },
        { name: "Trammell Crow Residential", rank: "middle", url: "https://www.tcr.com" },
        { name: "Waterton Residential", rank: "middle", url: "https://www.waterton.com" },
        { name: "FPI Management", rank: "middle", url: "https://www.fpimgt.com" },
        { name: "CWS Apartment Homes", rank: "middle", url: "https://www.cwsapartments.com" },
        { name: "ZRS Management", rank: "middle", url: "https://www.zrsmanagement.com" },
        { name: "RPM Living", rank: "middle", url: "https://www.rpmliving.com" },

        // Small Companies
        { name: "Drucker + Falk", rank: "small", url: "https://www.druckerandfalk.com" },
        { name: "JMG Realty", rank: "small", url: "https://www.jmgrealty.com" },
        { name: "Sentinel Real Estate Corporation", rank: "small", url: "https://www.sentinelcorp.com" },
        { name: "Edward Rose & Sons", rank: "small", url: "https://www.edwardrose.com" },
        { name: "Harbor Group International", rank: "small", url: "https://www.harborgroupint.com" },
        { name: "Monogram Residential Trust", rank: "small", url: "https://www.monogramres.com" },
        { name: "JRK Property Holdings", rank: "small", url: "https://www.jrk.com" },
        { name: "Baldwin Real Estate Corporation", rank: "small", url: "https://www.baldwinrealestatecorp.com" },
        { name: "Rangewater Real Estate", rank: "small", url: "https://www.liverangewater.com" },
        { name: "Alliance Communities", rank: "small", url: "https://www.alliancecommunities.com" },
        { name: "Roscoe Property Management", rank: "small", url: "https://www.roscoeprop.com" },
    ],

    retail: [
        // Mega Companies
        { name: "Simon Property Group", rank: "mega", url: "https://www.simon.com" },
        { name: "Brookfield Properties Retail", rank: "mega", url: "https://www.brookfieldpropertiesretail.com" },

        // Big Companies
        { name: "Macerich", rank: "big", url: "https://www.macerich.com" },
        { name: "Taubman Centers", rank: "big", url: "https://www.taubman.com" },
        { name: "Unibail-Rodamco-Westfield", rank: "big", url: "https://www.urw.com" },
        { name: "Kimco Realty", rank: "big", url: "https://www.kimcorealty.com" },
        { name: "Regency Centers", rank: "big", url: "https://www.regencycenters.com" },
        { name: "Federal Realty Investment Trust", rank: "big", url: "https://www.federalrealty.com" },
        { name: "Brixmor Property Group", rank: "big", url: "https://www.brixmor.com" },
        { name: "Realty Income Corporation", rank: "big", url: "https://www.realtyincome.com" },
        { name: "Weingarten Realty Investors", rank: "big", url: "https://www.weingarten.com" },
        { name: "SITE Centers Corp.", rank: "big", url: "https://www.sitecenters.com" },
        { name: "Retail Properties of America", rank: "big", url: "https://www.rpai.com" },

        // Middle Companies
        { name: "Urban Edge Properties", rank: "middle", url: "https://www.uedge.com" },
        { name: "Retail Opportunity Investments Corp.", rank: "middle", url: "https://www.roireit.net" },
        { name: "Acadia Realty Trust", rank: "middle", url: "https://www.acadiarealty.com" },
        { name: "National Retail Properties", rank: "middle", url: "https://www.nnnreit.com" },
        { name: "InvenTrust Properties", rank: "middle", url: "https://www.inventrustproperties.com" },
        { name: "RPT Realty", rank: "middle", url: "https://www.rptrealty.com" },
        { name: "Agree Realty Corporation", rank: "middle", url: "https://www.agreerealty.com" },
        { name: "Kite Realty Group Trust", rank: "middle", url: "https://www.kiterealty.com" },
        { name: "Whitestone REIT", rank: "middle", url: "https://www.whitestonereit.com" },

        // Small Companies
        { name: "Urstadt Biddle Properties", rank: "small", url: "https://www.ubproperties.com" },
        { name: "Bayer Properties", rank: "small", url: "https://www.bayerproperties.com" },
        { name: "Phillips Edison & Company", rank: "small", url: "https://www.phillipsedison.com" },
        { name: "Saul Centers", rank: "small", url: "https://www.saulcenters.com" },
        { name: "Cedar Realty Trust", rank: "small", url: "https://www.cedarrealtytrust.com" },
        { name: "Wheeler Real Estate Investment Trust", rank: "small", url: "https://www.whlr.us" },
    ],

    office: [
        // Mega Companies
        { name: "Boston Properties", rank: "mega", url: "https://www.bostonproperties.com" },
        { name: "SL Green Realty", rank: "mega", url: "https://www.slgreen.com" },

        // Big Companies
        { name: "Vornado Realty Trust", rank: "big", url: "https://www.vno.com" },
        { name: "Kilroy Realty Corporation", rank: "big", url: "https://www.kilroyrealty.com" },
        { name: "Alexandria Real Estate Equities", rank: "big", url: "https://www.are.com" },
        { name: "Douglas Emmett", rank: "big", url: "https://www.douglasemmett.com" },
        { name: "Hudson Pacific Properties", rank: "big", url: "https://www.hudsonpacificproperties.com" },
        { name: "Highwoods Properties", rank: "big", url: "https://www.highwoods.com" },
        { name: "Cousins Properties", rank: "big", url: "https://www.cousins.com" },
        { name: "Paramount Group", rank: "big", url: "https://www.paramount-group.com" },
        { name: "Empire State Realty Trust", rank: "big", url: "https://www.empirestaterealtytrust.com" },
        { name: "Hudson Yards (Related Companies)", rank: "big", url: "https://www.hudsonyardsnewyork.com" },

        // Middle Companies
        { name: "Equity Commonwealth", rank: "middle", url: "https://www.eqcre.com" },
        { name: "Piedmont Office Realty Trust", rank: "middle", url: "https://www.piedmontreit.com" },
        { name: "Corporate Office Properties Trust", rank: "middle", url: "https://www.copt.com" },
        { name: "Franklin Street Properties Corp.", rank: "middle", url: "https://www.fspcorp.com" },
        { name: "Brandywine Realty Trust", rank: "middle", url: "https://www.brandywinerealty.com" },
        { name: "Easterly Government Properties", rank: "middle", url: "https://www.easterlyreit.com" },
        { name: "Columbia Property Trust", rank: "middle", url: "https://www.columbia.reit" },

        // Small Companies
        { name: "Office Properties Income Trust", rank: "small", url: "https://www.opireit.com" },
        { name: "New York City REIT", rank: "small", url: "https://www.newyorkcityreit.com" },
        { name: "American Assets Trust", rank: "small", url: "https://www.americanassetstrust.com" },
        { name: "City Office REIT", rank: "small", url: "https://www.cityofficereit.com" },
        { name: "Government Properties Income Trust", rank: "small", url: "https://www.govreit.com" },
    ],

    'data-center': [
        // Mega Companies
        { name: "Equinix", rank: "mega", url: "https://www.equinix.com" },
        { name: "Digital Realty Trust", rank: "mega", url: "https://www.digitalrealty.com" },

        // Big Companies
        { name: "CyrusOne", rank: "big", url: "https://www.cyrusone.com" },
        { name: "CoreSite Realty", rank: "big", url: "https://www.coresite.com" },
        { name: "QTS Realty Trust", rank: "big", url: "https://www.qtsdatacenters.com" },
        { name: "Iron Mountain Data Centers", rank: "big", url: "https://www.ironmountain.com/data-centers" },
        { name: "Switch, Inc.", rank: "big", url: "https://www.switch.com" },
        { name: "Interxion (Digital Realty)", rank: "big", url: "https://www.interxion.com" },

        // Middle Companies
        { name: "Flexential", rank: "middle", url: "https://www.flexential.com" },
        { name: "Aligned Data Centers", rank: "middle", url: "https://www.alignedenergy.com" },
        { name: "Vantage Data Centers", rank: "middle", url: "https://www.vantagedatacenters.com" },
        { name: "STACK Infrastructure", rank: "middle", url: "https://www.stackinfra.com" },
        { name: "DataBank", rank: "middle", url: "https://www.databank.com" },
        { name: "TierPoint", rank: "middle", url: "https://www.tierpoint.com" },

        // Small Companies
        { name: "Cyxtera Technologies", rank: "small", url: "https://www.cyxtera.com" },
        { name: "EdgeConneX", rank: "small", url: "https://www.edgeconnex.com" },
        { name: "Sabey Data Centers", rank: "small", url: "https://www.sabeydatacenters.com" },
        { name: "Evoque Data Center Solutions", rank: "small", url: "https://www.evoquedcs.com" },
        { name: "Cologix", rank: "small", url: "https://www.cologix.com" },
        { name: "Compass Datacenters", rank: "small", url: "https://www.compassdatacenters.com" },
    ],

    brokerage: [
        // Mega Companies
        { name: "CBRE", rank: "mega", url: "https://www.cbre.com" },
        { name: "JLL", rank: "mega", url: "https://www.us.jll.com" },

        // Big Companies
        { name: "Cushman & Wakefield", rank: "big", url: "https://www.cushmanwakefield.com" },
        { name: "Colliers International", rank: "big", url: "https://www.colliers.com" },
        { name: "Newmark", rank: "big", url: "https://www.nmrk.com" },
        { name: "Marcus & Millichap", rank: "big", url: "https://www.marcusmillichap.com" },
        { name: "Avison Young", rank: "big", url: "https://www.avisonyoung.com" },
        { name: "Transwestern", rank: "big", url: "https://www.transwestern.com" },
        { name: "Savills", rank: "big", url: "https://www.savills.us" },
        { name: "Lee & Associates", rank: "big", url: "https://www.lee-associates.com" },
        { name: "HFF", rank: "big", url: "https://www.hfflp.com" }, // Note: HFF was acquired by JLL

        // Middle Companies
        { name: "NAI Global", rank: "middle", url: "https://www.naiglobal.com" },
        { name: "SVN International Corp.", rank: "middle", url: "https://www.svn.com" },
        { name: "Coldwell Banker Commercial", rank: "middle", url: "https://www.cbcworldwide.com" },
        { name: "Kidder Mathews", rank: "middle", url: "https://www.kidder.com" },
        { name: "Cresa", rank: "middle", url: "https://www.cresa.com" },
        { name: "JLL Valuation & Advisory Services", rank: "middle", url: "https://www.us.jll.com" },

        // Small Companies
        { name: "Berkadia", rank: "small", url: "https://www.berkadia.com" },
        { name: "Eastdil Secured", rank: "small", url: "https://www.eastdilsecured.com" },
        { name: "Mohr Partners", rank: "small", url: "https://www.mohrpartners.com" },
        { name: "Marcus & Millichap Capital Corporation", rank: "small", url: "https://www.marcusmillichap.com" },
        { name: "The Shopping Center Group", rank: "small", url: "https://www.theshoppingcentergroup.com" },
        { name: "The Boulder Group", rank: "small", url: "https://www.bouldergroup.com" },
    ],

    'asset-managers': [
        // Mega Companies
        { name: "Blackstone Group", rank: "mega", url: "https://www.blackstone.com" },
        { name: "Brookfield Asset Management", rank: "mega", url: "https://www.brookfield.com" },

        // Big Companies
        { name: "Starwood Capital Group", rank: "big", url: "https://www.starwoodcapital.com" },
        { name: "KKR & Co.", rank: "big", url: "https://www.kkr.com" },
        { name: "Tishman Speyer", rank: "big", url: "https://www.tishmanspeyer.com" },
        { name: "BlackRock Real Assets", rank: "big", url: "https://www.blackrock.com" },
        { name: "Prudential Real Estate Investors (PGIM)", rank: "big", url: "https://www.pgimrealestate.com" },
        { name: "MetLife Investment Management", rank: "big", url: "https://investments.metlife.com" },
        { name: "Nuveen Real Estate", rank: "big", url: "https://www.nuveen.com" },
        { name: "Invesco Real Estate", rank: "big", url: "https://www.invesco.com" },
        { name: "AXA Investment Managers", rank: "big", url: "https://www.axa-im.com" },
        { name: "AEW Capital Management", rank: "big", url: "https://www.aew.com" },
        { name: "Clarion Partners", rank: "big", url: "https://www.clarionpartners.com" },
        { name: "LaSalle Investment Management", rank: "big", url: "https://www.lasalle.com" },

        // Middle Companies
        { name: "Heitman", rank: "middle", url: "https://www.heitman.com" },
        { name: "Grosvenor Americas", rank: "middle", url: "https://www.grosvenor.com" },
        { name: "DWS Group (RREEF)", rank: "middle", url: "https://www.dws.com" },
        { name: "Morgan Stanley Real Estate Investing", rank: "middle", url: "https://www.morganstanley.com" },
        { name: "JP Morgan Asset Management", rank: "middle", url: "https://am.jpmorgan.com" },
        { name: "Hines Interests Limited Partnership", rank: "middle", url: "https://www.hines.com" },
        { name: "Carlyle Group", rank: "middle", url: "https://www.carlyle.com" },
        { name: "Apollo Global Management", rank: "middle", url: "https://www.apollo.com" },

        // Small Companies
        { name: "GTIS Partners", rank: "small", url: "https://www.gtispartners.com" },
        { name: "Madison Realty Capital", rank: "small", url: "https://www.madisonrealtycapital.com" },
        { name: "Square Mile Capital Management", rank: "small", url: "https://www.squaremilecapital.com" },
        { name: "AllianceBernstein", rank: "small", url: "https://www.alliancebernstein.com" },
        { name: "Harbor Group International", rank: "small", url: "https://www.harborgroupint.com" },
        { name: "Westbrook Partners", rank: "small", url: "https://www.westbrookpartners.com" },
        { name: "Abu Dhabi Investment Authority (ADIA)", rank: "small", url: "https://www.adia.ae" },
        { name: "Beacon Capital Partners", rank: "small", url: "https://www.beaconcapital.com" },
        { name: "Lone Star Funds", rank: "small", url: "https://www.lonestarfunds.com" },
        { name: "Mesa West Capital", rank: "small", url: "https://www.mesawestcapital.com" },
    ],

    lps: [
        // Mega Companies
        { name: "Government Pension Investment Fund (Japan)", rank: "mega", url: "https://www.gpif.go.jp/en" },
        { name: "Norwegian Government Pension Fund Global", rank: "mega", url: "https://www.nbim.no" },

        // Big Companies
        { name: "GIC Private Limited (Singapore)", rank: "big", url: "https://www.gic.com.sg" },
        { name: "Canada Pension Plan Investment Board (CPP Investments)", rank: "big", url: "https://www.cppinvestments.com" },
        { name: "Abu Dhabi Investment Authority (ADIA)", rank: "big", url: "https://www.adia.ae" },
        { name: "California Public Employees' Retirement System (CalPERS)", rank: "big", url: "https://www.calpers.ca.gov" },
        { name: "Qatar Investment Authority", rank: "big", url: "https://www.qia.qa" },
        { name: "National Pension Service of Korea", rank: "big", url: "https://www.nps.or.kr" },
        { name: "Allianz SE", rank: "big", url: "https://www.allianz.com" },
        { name: "APG Asset Management", rank: "big", url: "https://www.apg.nl/en" },

        // Middle Companies
        { name: "Teachers Insurance and Annuity Association of America (TIAA)", rank: "middle", url: "https://www.tiaa.org" },
        { name: "Ontario Teachers' Pension Plan", rank: "middle", url: "https://www.otpp.com" },
        { name: "Public Sector Pension Investment Board (PSP Investments)", rank: "middle", url: "https://www.investpsp.com" },
        { name: "MetLife, Inc.", rank: "middle", url: "https://www.metlife.com" },
        { name: "AXA Group", rank: "middle", url: "https://www.axa.com" },
        { name: "Norges Bank Investment Management", rank: "middle", url: "https://www.nbim.no" },

        // Small Companies
        { name: "New York State Common Retirement Fund", rank: "small", url: "https://www.osc.state.ny.us/pension" },
        { name: "Texas Teachers Retirement System", rank: "small", url: "https://www.trs.texas.gov" },
        { name: "Alaska Permanent Fund Corporation", rank: "small", url: "https://apfc.org" },
        { name: "Florida State Board of Administration", rank: "small", url: "https://www.sbafla.com" },
        { name: "Massachusetts Pension Reserves Investment Management Board", rank: "small", url: "https://www.mapension.com" },
        { name: "Illinois Municipal Retirement Fund", rank: "small", url: "https://www.imrf.org" },
    ],
};

const gradients = {
    logistics: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
    multifamily: 'linear-gradient(0deg, #ff7e5f, #feb47b)',
    retail: 'linear-gradient(0deg, #00c6ff, #0072ff)',
    office: 'linear-gradient(0deg, #f7ff00, #db36a4)',
    'data-center': 'linear-gradient(0deg, #654ea3, #eaafc8)',
    brokerage: 'linear-gradient(0deg, #1c92d2, #f2fcfe)',
    'asset-managers': 'linear-gradient(0deg, #fc466b, #3f5efb)',
    lps: 'linear-gradient(0deg, #11998e, #38ef7d)',
};

let currentCategory = 'logistics'; // default category

function generatePoster(category) {
    currentCategory = category;
    const companies = companiesData[category];
    const poster = document.getElementById('poster');
    poster.innerHTML = '';

    const ranks = ['mega', 'big', 'middle', 'small'];
    ranks.forEach(rank => {
        const rankedCompanies = companies.filter(company => company.rank === rank);
        if (rankedCompanies.length > 0) {
            appendCompanies(rankedCompanies, rank);
        }
    });

    // Update the poster title
    const titleElement = document.getElementById('poster-title');
    titleElement.textContent = categoryName(category);

    // Update the background gradient
    document.querySelector('.container').style.background = gradients[category];
}

function appendCompanies(companies, rank) {
    const div = document.createElement('div');
    div.classList.add('company-name', rank);

    companies.forEach((company, index) => {
        const anchor = document.createElement('a');
        anchor.href = company.url;
        anchor.target = "_blank";
        anchor.textContent = company.name;

        div.appendChild(anchor);

        if (index < companies.length - 1) {
            const separator = document.createElement('span');
            separator.textContent = " • ";
            div.appendChild(separator);
        }
    });

    document.getElementById('poster').appendChild(div);
}

function categoryName(categoryKey) {
    // Map category keys to display names
    const names = {
        logistics: 'US Logistics',
        multifamily: 'US Multifamily',
        retail: 'US Retail',
        office: 'US Office',
        'data-center': 'US Data Center',
        brokerage: 'US Brokerage',
        'asset-managers': 'US Asset Managers',
        lps: 'Largest LPs',
    };
    return names[categoryKey] || 'Real Estate Festival';
}

document.addEventListener('DOMContentLoaded', function () {
    // Initialize poster with default category
    generatePoster(currentCategory);

    // Add event listeners to navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            generatePoster(category);
        });
    });
		
		// Add event listener for the download button
    const downloadBtn = document.getElementById('download-btn');
    downloadBtn.addEventListener('click', downloadPoster);
});

function downloadPoster() {
    const poster = document.querySelector('.container');
    
    html2canvas(poster, {
  scale: 4, // Increase the resolution
  logging: true,
  useCORS: true,
}).then(canvas => {
        const link = document.createElement('a');
        link.download = `${currentCategory}-poster.png`;
        link.href = canvas.toDataURL();
        link.click();
    });
}
