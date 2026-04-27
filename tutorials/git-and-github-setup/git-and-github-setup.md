```markdown
# Git Bash integration with SSH in Windows

## Tutorial

1. Create a SSH key in Git Bash:

`ssh-keygen -t ed25519 -C "your_email@example.com"`

2. Enter your passphrase and repeat it.

3. Open PowerShell as administrator.

4. In PowerShell run the following commands.

4.1 Command 1:

`Get-Service ssh-agent | Set-Service -StartupType Automatic`

4.2 Command 2:

`Start-Service ssh-agent`

5. Close the PowerShell administrator session.

6. Open a normal PowerShell session.

7. Run the following command:

`ssh-add $env:USERPROFILE\\.ssh\\id_ed25519`

8. Enter your passphrase.

### Alternative using CMD

6. Open a normal CMD session.

7. Run the following command:

`ssh-add c:/Users/YOU/.ssh/id_ed25519`

8. Enter your passphrase.

9. Open Git Bash and test the SSH connection with the GitHub server:

`ssh -T git@github.com`

You may see a warning like this:

> The authenticity of host 'github.com (IP ADDRESS)' can't be established.
> ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
> Are you sure you want to continue connecting (yes/no)?

10. Type:

`yes`

Expected answer:

> Hi USERNAME! You've successfully authenticated, but GitHub does not provide shell access.
```
