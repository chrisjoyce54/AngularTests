import { greet } from './greet';

describe('greet', () => {
  it('should include name in message', () => {
    const result = greet('Chris');
    expect(result).toContain('Chris');
  });
});
