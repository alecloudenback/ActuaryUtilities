var documenterSearchIndex = {"docs":
[{"location":"#ActuaryUtilities.jl-1","page":"Home","title":"ActuaryUtilities.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"#","page":"Home","title":"Home","text":"DocTestSetup = quote\n    using ActuaryUtilities\n    using Dates\nend","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Modules = [ActuaryUtilities]","category":"page"},{"location":"#ActuaryUtilities.duration-Tuple{Dates.Date,Dates.Date}","page":"Home","title":"ActuaryUtilities.duration","text":"duration(Date, Date)\n\nCompute the duration given two dates, which is the number of years since the first date. The interval [0,1) is defined as having  duration 1. Can return negative durations if second argument is before the first.\n\njulia> issue_date  = Date(2018,9,30);\n\njulia> duration(issue_date , Date(2019,9,30) ) \n2\njulia> duration(issue_date , issue_date) \n1\njulia> duration(issue_date , Date(2018,10,1) ) \n1\njulia> duration(issue_date , Date(2019,10,1) ) \n2\njulia> duration(issue_date , Date(2018,6,30) ) \n0\njulia> duration(Date(2018,9,30),Date(2017,6,30)) \n-1\n\n\n\n\n\n","category":"method"},{"location":"#ActuaryUtilities.internal_rate_of_return-Tuple{Any,Any}","page":"Home","title":"ActuaryUtilities.internal_rate_of_return","text":"internal_rate_of_return(cashflows, timepoints; search_interval)\n\nCalculate the internalrateof_return with given timepoints.\n\njulia> internal_rate_of_return([-100,110],[0,1]) # e.g. cashflows at time 0 and 1\n0.10000000000000005\n\n\n\n\n\n","category":"method"},{"location":"#ActuaryUtilities.internal_rate_of_return-Tuple{Any}","page":"Home","title":"ActuaryUtilities.internal_rate_of_return","text":"internal_rate_of_return(cashflows; search_interval)\n\nCalculate the internalrateofreturn of a series of equally spaced cashflows, assuming the first  element occurs at time zero. By default searches the `searchinterval[-1,1]`.\n\n\n\n\n\n","category":"method"},{"location":"#ActuaryUtilities.irr","page":"Home","title":"ActuaryUtilities.irr","text":"irr()\n\nA shorthand for `internal_rate_of_return`.\n\n\n\n\n\n","category":"function"},{"location":"#ActuaryUtilities.present_value-Tuple{Any,Any,Any}","page":"Home","title":"ActuaryUtilities.present_value","text":"present_value(interest_rate, vector, timepoints)\n\nDiscount the vector v at interest rate i and with the cashflows occuring at the times specified in timepoints. \n\njulia> present_value(0.1, [10,20],[0,1])\n28.18181818181818\n\nExample on how to use real dates using the DayCounts.jl package\n\n\nusing DayCounts \ndates = Date(2012,12,31):Year(1):Date(2013,12,31)\ntimes = yearfrac.(dates[1], dates, Actual365) # [0.0,1.0]\npresent_value(0.1, [10,20],times)\n\n# output\n28.18181818181818\n\n\n\n\n\n\n\n","category":"method"},{"location":"#ActuaryUtilities.present_value-Tuple{Any,Any}","page":"Home","title":"ActuaryUtilities.present_value","text":"pv(interest_rate, vector)\n\nDiscount the vector v at interest rate i. It is assumed that the cashflows are  periodic commisurate with the period of the interest rate (ie use an annual rate for  annual values in the vector, quarterly interest rate for quarterly cashflows). The first value of the vector v is assumed to occur at the end of period 1.\n\n\n\n\n\n","category":"method"},{"location":"#ActuaryUtilities.pv","page":"Home","title":"ActuaryUtilities.pv","text":"pv()\n\nA shorthand for `present_value`.\n\n\n\n\n\n","category":"function"},{"location":"#ActuaryUtilities.years_between","page":"Home","title":"ActuaryUtilities.years_between","text":"Years_Between(Date, Date)\n\nCompute the number of integer years between two dates, with the  first date typically before the second. Will return negative number if first date is after the second. Use third argument to indicate if calendar  annivesary should count as a full year.\n\nExamples\n\njulia> d1 = Date(2018,09,30);\n\njulia> d2 = Date(2019,09,30);\n\njulia> d3 = Date(2019,10,01);\n\njulia> years_between(d1,d3) \n1\njulia> years_between(d1,d2,false) # same month/day but `false` overlap\n0 \njulia> years_between(d1,d2) # same month/day but `true` overlap\n1 \njulia> years_between(d1,d2) # using default `true` overlap\n1 \n\n\n\n\n\n","category":"function"}]
}
