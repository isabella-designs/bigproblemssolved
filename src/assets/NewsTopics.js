import inflation from './inflation.png'
import covid from './covid.png'
import crime from './crime.png'
import feminism from './feminism.png'
import heart from './heart.png'
import mask from './mask.png'
import sleeping from './sleeping.png'
import unemployment from './unemployment.png'
import unite from './unite.png'



const newsTopicMap = [
    {"topic": "Inflation", "status": "popular", "coverage": 10, "bias": 15, "countyImpact": 10, "summary": ["abc", "xyz"], "links": ["abc", "xyz"], "bestSource": "WSJ", "img": inflation, "countyImpactBucket": "low"}, 
    {"topic": "Covid-19", "status": "popular", "coverage": 10, "bias": 15, "countyImpact": 10, "summary": ["abc", "xyz"], "links": ["abc", "xyz"], "bestSource": "WSJ", "img": covid, "countyImpactBucket": "low"},
    {"topic": "Violent Crime", "status": "popular", "coverage": 10, "bias": 15, "countyImpact": 10, "summary": ["abc", "xyz"], "links": ["abc", "xyz"], "bestSource": "WSJ", "img": crime, "countyImpactBucket": "low"}, 
    {"topic": "Affordability of Healthcare", "status": "popular", "coverage": 10, "bias": 15, "countyImpact": 10, "summary": ["abc", "xyz"], "links": ["abc", "xyz"], "bestSource": "WSJ", "img": heart, "countyImpactBucket": "low"}, 
    {"topic": "Unemployment", "status": "popular", "coverage": 10, "bias": 15, "countyImpact": 10, "summary": ["abc", "xyz"], "links": ["abc", "xyz"], "bestSource": "WSJ", "img": unemployment, "countyImpactBucket": "low"}, 
    {"topic": "Sleep Health", "status": "popular", "coverage": 10, "bias": 15, "countyImpact": 10, "summary": ["abc", "xyz"], "links": ["abc", "xyz"], "bestSource": "WSJ", "img": sleeping, "countyImpactBucket": "low"}, 
    {"topic": "Women's Rights", "status": "popular", "coverage": 10, "bias": 15, "countyImpact": 10, "summary": ["abc", "xyz"], "links": ["abc", "xyz"], "bestSource": "WSJ", "img": feminism, "countyImpactBucket": "low"}, 
    {"topic": "Inclusivity", "status": "popular", "coverage": 10, "bias": 15, "countyImpact": 10, "summary": ["abc", "xyz"], "links": ["abc", "xyz"], "bestSource": "WSJ", "img": unite, "countyImpactBucket": "low"}, 
    {"topic": "Preventional Health", "status": "popular", "coverage": 10, "bias": 15, "countyImpact": 10, "summary": ["abc", "xyz"], "links": ["abc", "xyz"], "bestSource": "WSJ", "img": mask, "countyImpactBucket": "low"},  
]

export default newsTopicMap;