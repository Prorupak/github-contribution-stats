const { ContributionRatings } = require('../../src/ContributionRatings');

describe('Tests for Contribution Ratings.', () => {

  it('should calculate default contribution ratings.', () => {
    ContributionRatings.setThisYearCommits(0);
    ContributionRatings.setThisMonthCommits(0);
    ContributionRatings.setThisWeekCommits(0);
    ContributionRatings.setPullRequests(0);
    ContributionRatings.setIssues(0);
    ContributionRatings.setCodeReviews(0);
    ContributionRatings.calculate();
    
    expect(ContributionRatings.getLetterSign()).toBe('B');
    expect(ContributionRatings.getColor()).toBe('#2f74ed');
  });

  it('should calculate given contribution ratings.', () => {
    ContributionRatings.setThisYearCommits(1415);
    ContributionRatings.setThisMonthCommits(1);
    ContributionRatings.setThisWeekCommits(1);
    ContributionRatings.setPullRequests(0);
    ContributionRatings.setIssues(1);
    ContributionRatings.setCodeReviews(1);
    ContributionRatings.calculate();
    
    expect(ContributionRatings.getLetterSign()).toBe('A+');
    expect(ContributionRatings.getColor()).toBe('#7d00b3');
    expect(ContributionRatings.getProgress()).toBe('50');
  });

});
