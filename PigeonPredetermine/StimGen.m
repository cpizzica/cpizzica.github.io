MaxTrialAmount = 40;
ScriptAmounts = 100;

GeneratedStim = normrnd(0.0397,1,MaxTrialAmount,ScriptAmounts);
GeneratedStimCS = cumsum(GeneratedStim);
GeneratedStimCS = GeneratedStimCS * 15;
GeneratedStimCS = round(GeneratedStimCS);
GeneratedStimCST = GeneratedStimCS';
tablenorm = array2table(GeneratedStimCST);
writetable(tablenorm,'0397.csv');

GeneratedStim = normrnd(0.1218,1,MaxTrialAmount,ScriptAmounts);
GeneratedStimCS = cumsum(GeneratedStim);
GeneratedStimCS = GeneratedStimCS * 15;
GeneratedStimCS = round(GeneratedStimCS);
GeneratedStimCST = GeneratedStimCS';
tablenorm = array2table(GeneratedStimCST);
writetable(tablenorm,'1218.csv');

GeneratedStim = normrnd(0.2133,1,MaxTrialAmount,ScriptAmounts);
GeneratedStimCS = cumsum(GeneratedStim);
GeneratedStimCS = GeneratedStimCS * 15;
GeneratedStimCS = round(GeneratedStimCS);
GeneratedStimCST = GeneratedStimCS';
tablenorm = array2table(GeneratedStimCST);
writetable(tablenorm,'2133.csv');

GeneratedStim = normrnd(0.3277,1,MaxTrialAmount,ScriptAmounts);
GeneratedStimCS = cumsum(GeneratedStim);
GeneratedStimCS = GeneratedStimCS * 15;
GeneratedStimCS = round(GeneratedStimCS);
GeneratedStimCST = GeneratedStimCS';
tablenorm = array2table(GeneratedStimCST);
writetable(tablenorm,'3277.csv');

GeneratedStim = normrnd(0.5201,1,MaxTrialAmount,ScriptAmounts);
GeneratedStimCS = cumsum(GeneratedStim);
GeneratedStimCS = GeneratedStimCS * 15;
GeneratedStimCS = round(GeneratedStimCS);
GeneratedStimCST = GeneratedStimCS';
tablenorm = array2table(GeneratedStimCST);
writetable(tablenorm,'5201.csv');


