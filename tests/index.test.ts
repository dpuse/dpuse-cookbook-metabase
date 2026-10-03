import { Cookbook } from '@/index';
import { describe, expect, it } from 'vitest';

describe('Cookbook', () => {
    it('constructs with the static config', () => {
        const cookbook = new Cookbook();
        expect(cookbook.config.id).toBe('dpuse-cookbook-metabase');
    });
});
