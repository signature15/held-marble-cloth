import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The scene is small enough to hold in a single, unhurried glance.
// Blue gives the eye one cool point of focus without asking for attention.
// The marble's roundness suggests motion, but the cloth has already softened it.
// A fold becomes a little cradle, turning an ordinary surface into shelter.
// The imagined roll slows down until there is no task left to complete.
// That quiet pause lets a reader's breathing and attention settle naturally.
// Nothing in the image is urgent, so the mind can rest beside it for a moment.
// The image offers comfort through balance: weight below, softness around it.
// Its simplicity leaves a little room for the reader's own calm to arrive.
const text = "A blue marble rests in the pocket of a folded cloth. Its small roll dwindles to a hush, and the cloth keeps the round shape.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? './output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), text, 'utf8');
