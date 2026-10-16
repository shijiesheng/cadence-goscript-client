# Goal

Workflow is successfully completed by `npm run start-workflow`

# Process

Each run start the worker first `npm run worker` and then start a new workflow using `npm run start-workflow`.

If it failed, read the error messages in both worker and start workflow script to fix the bug.

Restart the process until the bug is fixed.

Write down all the bugs in the docs/bugs.md as a journal.
